import { gsap } from "@/lib/gsap"
import { useGLTF } from "@react-three/drei"
import { CuboidCollider, RapierRigidBody, RigidBody } from "@react-three/rapier"
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

export enum OwraModelTypes {
  o = "o",
  w = "w",
  r = "r",
  a = "a",
}

interface ModelProps {
  modelType: OwraModelTypes
  position: any
  scale: any
  moved?: boolean
}

export function ModelOwraLogo(props: ModelProps) {
  const { nodes } = useGLTF("/glb/owra.glb") as GLTFResult
  const { modelType } = props

  return (
    <PhysicsWrapper position={props.position} scale={props.scale} moved={props.moved}>
      <group dispose={null} scale={40}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes[modelType].geometry}
          material={new THREE.MeshStandardMaterial({ color: "#FF5B4A" })}
        />
      </group>
    </PhysicsWrapper>
  )
}

interface PhysicsWrapperProps {
  children: ReactNode
  position: any
  scale: any
  moved?: boolean
}

export default function PhysicsWrapper(props: PhysicsWrapperProps) {
  const api = React.useRef<RapierRigidBody>(null)
  const random = () => gsap.utils.random(-10, 10, 0.1)

  // useEffect(() => {
  //   function move() {
  //     const vec3 = new THREE.Vector3()

  //     if (!api.current) return

  //     api.current.addTorque(vec3.set(500, 0, 0), false)
  //   }

  //   props.moved ?? move()
  // }, [props.moved])

  useEffect(() => {
    const vec3 = new THREE.Vector3()

    if (!api.current) return

    api.current.addTorque(vec3.set(0, 50, 0), false)
  }, [])

  return (
    <>
      <RigidBody
        ref={api}
        enabledRotations={[true, true, true]}
        enabledTranslations={[false, false, false]}
        angularDamping={10}
        friction={0.1}
        rotation={new THREE.Euler(random(), random(), random())}
        position={props.position}
        scale={props.scale}
      >
        {props.children}
      </RigidBody>
    </>
  )
}

useGLTF.preload("/glb/owra.glb")
