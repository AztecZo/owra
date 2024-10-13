import { gsap } from "@/lib/gsap"
import { useGLTF } from "@react-three/drei"
import { BallCollider, CuboidCollider, RapierRigidBody, RigidBody } from "@react-three/rapier"
import React, { ReactNode, useEffect } from "react"
import * as THREE from "three"
import { GLTF } from "three-stdlib"

type GLTFResult = GLTF & {
  nodes: {
    w: THREE.Mesh
    a: THREE.Mesh
    o: THREE.Mesh
    r: THREE.Mesh
  }
  materials: {
    ["SVGMat.001"]: THREE.MeshStandardMaterial
    ["SVGMat.007"]: THREE.MeshStandardMaterial
    ["SVGMat.004"]: THREE.MeshStandardMaterial
    ["SVGMat.006"]: THREE.MeshStandardMaterial
  }
}

interface ModelProps {
  o?: boolean
  w?: boolean
  r?: boolean
  a?: boolean
  position: any
  scale: any
  moved: boolean
}

export function ModelOwraLogo(props: ModelProps) {
  const { nodes, materials } = useGLTF("/glb/owra.glb") as GLTFResult
  const { o = false, w = false, r = false, a = false } = props
  return (
    <PhysicsWrapper position={props.position} scale={props.scale} moved={props.moved}>
      <group dispose={null} scale={40}>
        {o && (
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.o.geometry}
            material={new THREE.MeshStandardMaterial({ color: "#FF5B4A" })}
          />
        )}
        {w && (
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.w.geometry}
            material={new THREE.MeshStandardMaterial({ color: "#FF5B4A" })}
          />
        )}
        {r && (
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.r.geometry}
            material={new THREE.MeshStandardMaterial({ color: "#FF5B4A" })}
          />
        )}
        {a && (
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.a.geometry}
            material={new THREE.MeshStandardMaterial({ color: "#FF5B4A" })}
          />
        )}
      </group>
    </PhysicsWrapper>
  )
}

useGLTF.preload("/glb/owra.glb")

interface PhysicsWrapperProps {
  children: ReactNode
  position: any
  scale: any
  moved: boolean
}

export default function PhysicsWrapper(props: PhysicsWrapperProps) {
  const api = React.useRef<RapierRigidBody | null>(null)

  const rt = new THREE.Euler(
    gsap.utils.random(-10, 10, 0.1),
    gsap.utils.random(-10, 10, 0.1),
    gsap.utils.random(-10, 10, 0.1)
  )

  const vec4 = new THREE.Vector4()

  function move() {
    const vec3 = new THREE.Vector3()

    if (!api.current) return

    api.current.addTorque(vec3.set(500, 0, 0), true)
  }

  useEffect(() => {
    props.moved ? move() : null
  }, [props.moved])

  return (
    <>
      <RigidBody
        ref={api}
        colliders={false}
        enabledRotations={[true, true, true]}
        enabledTranslations={[false, false, false]}
        linearDamping={10} // Increase this to slow down linear movement
        angularDamping={10} // More angular resistance to simulate drag
        mass={50000}
        canSleep={false}
        restitution={0.1} // Lower restitution for softer impacts in water
        friction={0.1} // Lower friction for smoother movement
        rotation={rt}
        position={props.position}
        scale={props.scale}
      >
        <CuboidCollider args={[2, 2, 2]}>{props.children}</CuboidCollider>
      </RigidBody>
    </>
  )
}
