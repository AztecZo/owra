import s from "./pop-slider.module.scss"

import { gsap } from "@/lib/gsap"
import { useGSAP } from "@gsap/react"
import {
  Environment,
  Float,
  Html,
  MeshTransmissionMaterial,
  OrthographicCamera,
  Stats,
  useGLTF,
} from "@react-three/drei"
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber"
import cx from "clsx"
import { Leva, useControls } from "leva"
import { forwardRef, Suspense, useEffect, useImperativeHandle, useMemo, useRef, useState } from "react"
import * as THREE from "three"
import { GLTF } from "three-stdlib"

import { convertHexToGLSLRGB } from "@/lib/utils"
import fragmentShaderWavyVortex from "@/public/shaders/pop-slider/wavy-vortex/fragment.glsl"
import vertexShaderWavyVortex from "@/public/shaders/pop-slider/wavy-vortex/vertex.glsl"

interface SliderItemProps {
  active: boolean
  index: number
  item: {
    position: THREE.Vector3
    scale: number
    geometry: THREE.BufferGeometry
    color: string
  }
}

export default function PopSlider() {
  return (
    <div className="w-full h-full">
      <Scene />
      <Leva />
    </div>
  )
}

function Scene() {
  return (
    <Canvas dpr={2}>
      <color attach="background" args={["#ffffff"]} />

      {/* <PerspectiveCamera makeDefault position={[0, 0, 4]} near={0.1} fov={50} /> */}
      <OrthographicCamera
        makeDefault
        zoom={50} // Control zoom level
        // left={-window.innerWidth / 2}
        // right={window.innerWidth / 2}
        // top={window.innerHeight / 2}
        // bottom={-window.innerHeight / 2}
        near={0.1}
        far={1000}
        position={[0, 0, 10]} // Position the camera in space
      />

      <ambientLight intensity={1.75} />

      <directionalLight intensity={5.75} position={[0, 10, 0]} />

      <Environment preset="studio" environmentIntensity={0.15} />

      {/* <Rig /> */}
      {/* <OrbitControls /> */}

      <Stats showPanel={0} />

      <Suspense fallback={null}>
        <Geometry />
        {/* <Seq /> */}
      </Suspense>
    </Canvas>
  )
}

function Seq() {
  const packageMap = useLoader(THREE.TextureLoader, "/img/cup-sequence/bardakgloss.612.1.png")

  return (
    <group>
      <mesh geometry={new THREE.PlaneGeometry(10, 10)}>
        <meshBasicMaterial map={packageMap} side={THREE.DoubleSide} transparent={true} />
      </mesh>
    </group>
  )
}

function Geometry() {
  const groupRef = useRef<THREE.Group>(null)

  const c = useRef(0)
  const [currentItem, setCurrentItem] = useState(c.current)
  const [currentItemUi, setCurrentItemUi] = useState(currentItem)

  const [buttonDisabled, setButtonDisabled] = useState(false)
  const { contextSafe } = useGSAP()
  const tlRef = useRef<gsap.core.Timeline | null>(null)

  const items = [
    {
      geometry: new THREE.IcosahedronGeometry(0.2),
      position: new THREE.Vector3(0, 0, 1.5),
      scale: 0.5,
      color: "lightgreen",
      bgColor: convertHexToGLSLRGB("#0075CE"),
    },
    {
      geometry: new THREE.SphereGeometry(0.2),
      position: new THREE.Vector3(0, 0, 1.5),
      scale: 0.5,
      color: "lightgreen",
      //HEXDECIMAL TO RGB CONVERSION
      bgColor: convertHexToGLSLRGB("#FF5B4A"),
    },
    {
      geometry: new THREE.BoxGeometry(0.2, 0.2, 0.2),
      position: new THREE.Vector3(0, 0, 1.5),
      scale: 0.5,
      color: "lightgreen",
      bgColor: convertHexToGLSLRGB("#73C6E4"),
    },
    {
      geometry: new THREE.ConeGeometry(0.3, 0.3, 32),
      position: new THREE.Vector3(0, 0, 1.5),
      scale: 0.5,
      color: "lightgreen",
      bgColor: convertHexToGLSLRGB("#FFEBAA"),
    },
  ]

  const itemRefs = useRef<THREE.Mesh[]>([])

  useEffect(() => {
    if (!groupRef.current) return

    tlRef.current = gsap.timeline().to(groupRef.current.scale, {
      x: 0,
      y: 0,
      z: 0,
      duration: 0.4,
      ease: "expo.out",
      onComplete: () => {
        if (!groupRef.current) return
        setCurrentItemUi(currentItem)
        gsap.to(groupRef.current.scale, {
          x: 1,
          y: 1,
          z: 1,
          duration: 1,
          ease: "expo.out",
          onComplete: () => {
            setButtonDisabled(false)
          },
        })
      },
    })
  }, [currentItem])

  const handleNext = contextSafe(() => {
    if (!tlRef.current) return

    setButtonDisabled(true)

    if (buttonDisabled) return

    tlRef.current.play(0)

    setCurrentItem(c.current + 1)
  })

  const handlePrev = contextSafe(() => {
    if (!tlRef.current) return

    setButtonDisabled(true)

    if (buttonDisabled) return

    tlRef.current.play(0)

    setCurrentItem(c.current + 1)
  })

  return (
    <>
      {/* <group ref={groupRef}>
        {items.map((item, index) => (
          <group key={index}>
            <SliderItem
              item={item}
              index={index}
              active={index === currentItemUi}
              ref={(node) => {
                if (node) {
                  itemRefs.current[index] = node
                }
              }}
            />
          </group>
        ))}
      </group> */}

      <Boba />

      {/* <Html fullscreen>
        <div className={cx(s.controls)}>
          <div className={cx(s.button, s.prev)} onClick={handlePrev}>
            prev
          </div>
          <div className={s.content}>content</div>
          <div className={cx(s.button, s.next)} onClick={handleNext}>
            next
          </div>
        </div>
      </Html> */}
      <WavyVortex />
    </>
  )
}

const SliderItem = forwardRef<THREE.Mesh, SliderItemProps>(({ item, active, index }, ref) => {
  const myRef = useRef<THREE.Mesh | null>(null)
  useImperativeHandle(ref, () => myRef.current as THREE.Mesh)
  const { contextSafe } = useGSAP()
  const [rotateSpeed, setRotateSpeed] = useState(0.2)

  const handlePointerOver = contextSafe(() => {
    if (!myRef.current) return

    setRotateSpeed(0.6)

    gsap.to(myRef.current.scale, {
      x: 1.5,
      y: 1.5,
      z: 1.5,
      duration: 2,
      ease: "elastic.out",
    })
  })

  const handlePointerOut = contextSafe(() => {
    if (!myRef.current) return

    setRotateSpeed(0.2)

    gsap.to(myRef.current.scale, {
      x: 1,
      y: 1,
      z: 1,
      duration: 1.5,
      ease: "elastic.out",
    })
  })

  useFrame(() => {
    if (!myRef.current) return

    myRef.current.rotation.x += 0.02 * rotateSpeed
    myRef.current.rotation.y += 0.02 * rotateSpeed
    myRef.current.rotation.z += 0.02 * rotateSpeed
  })

  return (
    // <mesh
    //   ref={(node) => {
    //     myRef.current = node
    //     if (typeof ref === "function") {
    //       ref(node)
    //     } else if (ref) {
    //       ref.current = node
    //     }
    //   }}
    //   position={item.position}
    //   scale={active ? new THREE.Vector3(1, 1, 1) : new THREE.Vector3(0, 0, 0)}
    //   geometry={item.geometry}
    //   material={new THREE.MeshStandardMaterial({ color: item.color })}
    // />
    // <IceGlass />
    <Boba />
  )
})

SliderItem.displayName = "SliderItem"

type GLTFResult = GLTF & {
  nodes: {
    ["pCube1-mesh"]: THREE.Mesh
    ["pCube1-mesh_1"]: THREE.Mesh
    ["pCube1-mesh_2"]: THREE.Mesh
    ["pCube1-mesh_3"]: THREE.Mesh
    ["pCube1-mesh_4"]: THREE.Mesh
    ["pCube1-mesh_5"]: THREE.Mesh
    ["pCube1-mesh_6"]: THREE.Mesh
    ["pCube1-mesh_7"]: THREE.Mesh
    ["pCube1-mesh_8"]: THREE.Mesh
    ["pCube1-mesh_9"]: THREE.Mesh
    ["pCube1-mesh_10"]: THREE.Mesh
    ["pCube1-mesh_11"]: THREE.Mesh
    ["pCube1-mesh_12"]: THREE.Mesh
    ["pCube1-mesh_13"]: THREE.Mesh
    CUsersberkaOneDriveMasaüstüBardak_Altobj: THREE.Mesh
    CUsersberkaOneDriveMasaüstüBardak_Ustobj: THREE.Mesh
  }
  materials: {
    bus: THREE.MeshPhysicalMaterial
    ["bus #1"]: THREE.MeshPhysicalMaterial
    ["bus #2"]: THREE.MeshPhysicalMaterial
    ["bus #3"]: THREE.MeshPhysicalMaterial
    ["bus #1"]: THREE.MeshPhysicalMaterial
    ["bus #1"]: THREE.MeshPhysicalMaterial
    ["bus #4"]: THREE.MeshPhysicalMaterial
    ["bus #1"]: THREE.MeshPhysicalMaterial
    ["bus #1"]: THREE.MeshPhysicalMaterial
    ["bus #1"]: THREE.MeshPhysicalMaterial
    ["bus #2"]: THREE.MeshPhysicalMaterial
    ["bus #1"]: THREE.MeshPhysicalMaterial
    ["bus #1"]: THREE.MeshPhysicalMaterial
    ["bus #2"]: THREE.MeshPhysicalMaterial
    ["Glass Basic Grey #2"]: THREE.MeshPhysicalMaterial
    Paint: THREE.MeshPhysicalMaterial
  }
}

function IceGlass(props: JSX.IntrinsicElements["group"]) {
  const { nodes } = useGLTF("/glb/bardak.glb") as GLTFResult
  const meshRef = useRef<THREE.Group>(null)
  const iceCubesMap = useLoader(THREE.TextureLoader, "/img/ice-cubes.png")
  const rotationSpeed = useRef(0.005)
  const scaleAmount = useRef(0.03)

  useFrame(() => {
    if (meshRef.current) {
      // meshRef.current.rotation.x += 0.001
      meshRef.current.rotation.y += rotationSpeed.current
      // meshRef.current.rotation.z += 0.001

      meshRef.current.scale.x = scaleAmount.current
      meshRef.current.scale.y = scaleAmount.current
      meshRef.current.scale.z = scaleAmount.current
    }
  })

  useMemo(() => {
    if (iceCubesMap) {
      iceCubesMap.wrapS = iceCubesMap.wrapT = THREE.ClampToEdgeWrapping
      iceCubesMap.offset.set(0, 0)
      iceCubesMap.rotation = Math.PI
      iceCubesMap.flipY = false
      iceCubesMap.center = new THREE.Vector2(0.5, 0.5)

      const aspectRatio = iceCubesMap.image.width / iceCubesMap.image.height
      iceCubesMap.repeat.set(0.28 * aspectRatio, 0.55 * aspectRatio)
    }
  }, [iceCubesMap])

  return (
    <>
      <group
        {...props}
        dispose={null}
        position={[0, 0, 1]}
        rotation={[0, 0, 0]}
        onPointerEnter={() => {
          scaleAmount.current = 0.035
          rotationSpeed.current = 0.05
        }}
        onPointerLeave={() => {
          scaleAmount.current = 0.03
          rotationSpeed.current = 0.005
        }}
      >
        <group ref={meshRef}>
          {/* <IceCubes {...nodes} /> */}
          <Cup {...nodes} />
        </group>
      </group>
    </>
  )
}

function Cup(nodes: GLTFResult["nodes"]) {
  const groupRef = useRef<THREE.Group | null>(null)
  const packageMap = useLoader(THREE.TextureLoader, "/img/chill-owra-package.png")

  useMemo(() => {
    if (packageMap) {
      packageMap.wrapS = packageMap.wrapT = THREE.ClampToEdgeWrapping
      packageMap.offset.set(-1.2, -0.2)
      packageMap.rotation = Math.PI * 1.5
      packageMap.flipY = true
      packageMap.center = new THREE.Vector2(0.5, 0.5)

      const aspectRatio = packageMap.image.width / packageMap.image.height
      packageMap.repeat.set(1.2, 1.5)
    }
  }, [packageMap])

  const materialProps = useControls(
    "cup",
    {
      meshPhysicalMaterial: false,
      transmissionSampler: true,
      backside: false,
      backsideThickness: { value: 2, min: -10, max: 10 },
      samples: { value: 3, min: 0, max: 32, step: 1 },
      resolution: { value: 512, min: 256, max: 2048, step: 256 },
      backsideResolution: { value: 512, min: 32, max: 2048, step: 256 },
      transmission: { value: 1, min: 0, max: 1 },
      roughness: { value: 0.1, min: 0, max: 1, step: 0.01 },
      ior: { value: 1.5, min: 1, max: 5, step: 0.01 },
      thickness: { value: 0.25, min: 0, max: 10, step: 0.01 },
      chromaticAberration: { value: 0.4, min: 0, max: 1 },
      anisotropy: { value: 0.3, min: 0, max: 1, step: 0.01 },
      distortion: { value: 0.0, min: 0, max: 1, step: 0.01 },
      distortionScale: { value: 0.3, min: 0.01, max: 1, step: 0.01 },
      temporalDistortion: { value: 0.65, min: 0, max: 1, step: 0.01 },
      attenuationDistance: { value: 0.5, min: 0, max: 2.5, step: 0.01 },
      clearcoat: { value: 0, min: 0, max: 1 },
      attenuationColor: "#ffffff",
      color: "white",
    },
    { collapsed: true }
  )

  useFrame(() => {
    if (!groupRef.current) return

    // groupRef.current.rotation.x += 0.01
    // groupRef.current.rotation.y += 0.01
    // groupRef.current.rotation.z += 0.01
  })

  return (
    <group ref={groupRef}>
      <group>
        <mesh
          geometry={nodes.CUsersberkaOneDriveMasaüstüBardak_Ustobj.geometry}
          position={[1.37532806, -173.60058784, 0.00108719]}
        >
          <MeshTransmissionMaterial {...materialProps} side={THREE.DoubleSide} toneMapped={false} />
        </mesh>

        <mesh geometry={nodes.CUsersberkaOneDriveMasaüstüBardak_Altobj.geometry} position={[1.3753624, -169.21138, 0]}>
          <MeshTransmissionMaterial {...materialProps} side={THREE.DoubleSide} map={packageMap} toneMapped={false} />
        </mesh>
      </group>
    </group>
  )
}

const CustomMaterial: React.FC = (props) => {
  const meshRef = useRef<THREE.Mesh>(null)
  const materialRef = useRef<THREE.ShaderMaterial>(null)
  const { size, viewport } = useThree()

  // Calculate the aspect ratio
  const aspectRatio = size.width / size.height
  const planeWidth = viewport.width * 0.95
  const planeHeight = (planeWidth / aspectRatio) * 0.95

  useEffect(() => {
    if (!meshRef.current) return

    const geometry = new THREE.PlaneGeometry(planeWidth, planeHeight)
    meshRef.current.geometry = geometry
  }, [planeWidth, planeHeight])

  // const uniforms = useMemo(
  //   () => ({
  //     color: { value: props.color },
  //     ringDistance: { value: props.ringDistance },
  //     maxRings: { value: props.maxRings },
  //     waveCount: { value: props.waveCount },
  //     waveDepth: { value: props.waveDepth },
  //     yCenter: { value: props.yCenter },
  //     direction: { value: props.direction },
  //     time: { value: 0 },
  //     width: { value: 0 },
  //     height: { value: 0 },
  //   }),
  //   []
  // )

  const controls = useControls({
    ringDistance: {
      value: 0.05,
      min: 0.0,
      max: 1.0,
      step: 0.00125,
    },
    maxRings: {
      value: 10,
      min: 2,
      max: 50,
      step: 1,
    },
    waveCount: {
      value: 10,
      min: 2,
      max: 100,
      step: 1,
    },
    waveDepth: {
      value: 0.04,
      min: 0.01,
      max: 0.2,
      step: 0.005,
    },
    yCenter: {
      value: 0.8,
      min: 0.0,
      max: 3.0,
      step: 0.1,
    },
    direction: {
      value: 1.2,
      min: -3.0,
      max: 3.0,
      step: 0.1,
    },
  })

  const uniforms = useMemo(
    () => ({
      color: { value: new THREE.Color().setFromVector3(convertHexToGLSLRGB("#0075CE")) },
      ringDistance: { value: controls.ringDistance },
      maxRings: { value: controls.maxRings },
      waveCount: { value: controls.waveCount },
      waveDepth: { value: controls.waveDepth },
      yCenter: { value: controls.yCenter },
      direction: { value: controls.direction },
      time: { value: 0 },
      width: { value: 0 },
      height: { value: 0 },
    }),
    []
  )

  useFrame(({ clock, size }) => {
    if (!materialRef.current) return

    materialRef.current.uniforms.time.value = clock.getElapsedTime() * 0.25
    materialRef.current.uniforms.width.value = size.width
    materialRef.current.uniforms.height.value = size.height

    materialRef.current.uniforms.ringDistance.value = controls.ringDistance
    materialRef.current.uniforms.maxRings.value = controls.maxRings
    materialRef.current.uniforms.waveCount.value = controls.waveCount
    materialRef.current.uniforms.waveDepth.value = controls.waveDepth
    materialRef.current.uniforms.yCenter.value = controls.yCenter
    materialRef.current.uniforms.direction.value = controls.direction
  })

  const colors = useRef([
    new THREE.Color().setFromVector3(convertHexToGLSLRGB("#0075CE")),
    new THREE.Color().setFromVector3(convertHexToGLSLRGB("#FF5B4A")),
    new THREE.Color().setFromVector3(convertHexToGLSLRGB("#73C6E4")),
    new THREE.Color().setFromVector3(convertHexToGLSLRGB("#FFEBAA")),
  ])

  const currentColor = useRef(colors.current.length - 1)

  const t = useRef<number>(1)

  const transitionDuration = 0.4 // seconds

  useFrame((state, delta) => {
    if (!materialRef.current) return

    const c1 = colors.current[currentColor.current]
    const c2 = colors.current[(currentColor.current + 1) % colors.current.length]

    const lerped = c1.clone().lerp(c2, t.current)

    // Update t.current based on delta time
    t.current += delta / transitionDuration
    if (t.current > 1) t.current = 1 // Clamp t.current to 1

    materialRef.current.uniforms.color.value = new THREE.Vector4(lerped.r, lerped.g, lerped.b, 1)
  })

  const handlePointerDown = () => {
    currentColor.current = (currentColor.current + 1) % colors.current.length
    t.current = 0
  }

  return (
    <mesh
      ref={meshRef}
      geometry={new THREE.PlaneGeometry(planeWidth, planeHeight)}
      castShadow={false}
      receiveShadow={false}
      onPointerDown={handlePointerDown}
    >
      <shaderMaterial
        ref={materialRef}
        uniforms={uniforms}
        vertexShader={vertexShaderWavyVortex}
        fragmentShader={fragmentShaderWavyVortex}
      />
    </mesh>
  )
}

function WavyVortex() {
  return <CustomMaterial />
}

type GLTFResultBobaCup = GLTF & {
  nodes: {
    Boba_sise2: THREE.Mesh
  }
  materials: {
    ["Cam_Kavanoz_#10"]: THREE.MeshPhysicalMaterial
  }
}

type GLTFResultBobaLid = GLTF & {
  nodes: {
    Boba_sise1: THREE.Mesh
  }
  materials: {
    ["Default:0:0:0_#11.001"]: THREE.MeshPhysicalMaterial
  }
}

function Boba() {
  const groupRef = useRef<THREE.Group | null>(null)
  const packageMap = useLoader(THREE.TextureLoader, "/img/boba-pineapple.jpg")
  const fillMap = useLoader(THREE.TextureLoader, "/img/boba-fill.png")

  useMemo(() => {
    if (packageMap) {
      packageMap.wrapS = packageMap.wrapT = THREE.ClampToEdgeWrapping
      packageMap.offset.set(0, 0)
      packageMap.rotation = Math.PI * 2
      packageMap.flipY = false
      packageMap.center = new THREE.Vector2(0.5, 0.5)

      const aspectRatio = packageMap.image.width / packageMap.image.height
      packageMap.repeat.set(1, -1)
    }
  }, [packageMap])

  const materialProps = useControls(
    "cup",
    {
      meshPhysicalMaterial: false,
      transmissionSampler: false,
      backside: false,
      backsideThickness: { value: 2, min: -10, max: 10 },
      samples: { value: 3, min: 0, max: 32, step: 1 },
      resolution: { value: 2048, min: 256, max: 2048, step: 256 },
      backsideResolution: { value: 2048, min: 32, max: 2048, step: 256 },
      transmission: { value: 1, min: 0, max: 1 },
      roughness: { value: 0.1, min: 0, max: 1, step: 0.01 },
      ior: { value: 3.5, min: 1, max: 5, step: 0.01 },
      thickness: { value: 0.05, min: 0, max: 10, step: 0.01 },
      chromaticAberration: { value: 0.4, min: 0, max: 1 },
      anisotropy: { value: 0.3, min: 0, max: 1, step: 0.01 },
      distortion: { value: 0.0, min: 0, max: 1, step: 0.01 },
      distortionScale: { value: 0.3, min: 0.01, max: 1, step: 0.01 },
      temporalDistortion: { value: 0.65, min: 0, max: 1, step: 0.01 },
      attenuationDistance: { value: 0.5, min: 0, max: 2.5, step: 0.01 },
      clearcoat: { value: 0, min: 0, max: 1 },
      attenuationColor: "#ffffff",
      color: "white",
    },
    { collapsed: true }
  )

  useFrame(() => {
    if (!groupRef.current) return

    // groupRef.current.rotation.x += 0.01
    groupRef.current.rotation.y += 0.01
    // groupRef.current.rotation.z += 0.01
  })

  const { nodes: bobaCupNodes } = useGLTF("/glb/boba-cup.glb") as GLTFResultBobaCup
  const { nodes: BobaLidNodes } = useGLTF("/glb/boba-lid.glb") as GLTFResultBobaLid

  return (
    <Float>
      <>
        <group position={[0, 0, 5]}>
          <group ref={groupRef} scale={0.7} position={[0, -4.5, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={BobaLidNodes.Boba_sise1.geometry}
              position={[0, 11.927, 0]}
              rotation={[Math.PI / 2, 0, 0]}
            >
              <meshPhongMaterial color={new THREE.Color("#000000")} side={THREE.DoubleSide} />
            </mesh>

            <mesh geometry={bobaCupNodes.Boba_sise2.geometry} position={[0, 5.795, 0]} rotation={[Math.PI / 2, 0, 0]}>
              <MeshTransmissionMaterial {...materialProps} />
            </mesh>

            <mesh
              castShadow={false}
              receiveShadow={false}
              geometry={new THREE.CylinderGeometry(4.05, 4.05, 8.25, 64, 1, true)}
              position={[0, 5.8, 0]}
            >
              <meshStandardMaterial map={packageMap} toneMapped={false} side={THREE.DoubleSide} />
            </mesh>
          </group>
          <group scale={1.1} position={[0, -0.75, 0]} rotation={[Math.PI / 1, 0, 0]}>
            <mesh geometry={new THREE.PlaneGeometry(5, 7)}>
              <meshPhysicalMaterial
                map={fillMap}
                bumpMap={fillMap}
                bumpScale={4}
                color={"#FFFFFF"}
                transparent={true}
                opacity={0.9}
                side={THREE.DoubleSide}
              />
            </mesh>
          </group>
        </group>
      </>
    </Float>
  )
}

useGLTF.preload("/glb/boba-lid.glb")
useGLTF.preload("/glb/boba-cup.glb")
useGLTF.preload("/glb/bardak.glb")
