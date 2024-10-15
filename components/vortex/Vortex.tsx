import { convertHexToGLSLRGB } from "@/lib/utils"
import { useFrame, useThree } from "@react-three/fiber"
import { useControls } from "leva"
import { useEffect, useMemo, useRef } from "react"
import * as THREE from "three"
import fragmentShaderVortex from "@/public/shaders/pop-slider/wavy-vortex/fragment.glsl"
import vertexShaderVortex from "@/public/shaders/pop-slider/wavy-vortex/vertex.glsl"

interface VortexProps {
  currentItem: number
}

export default function Vortex(props: VortexProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const materialRef = useRef<THREE.ShaderMaterial>(null)
  const { size, viewport } = useThree()

  const aspectRatio = size.width / size.height
  const planeWidth = viewport.width * 1
  const planeHeight = (planeWidth / aspectRatio) * 1

  useEffect(() => {
    if (!meshRef.current) return

    const geometry = new THREE.PlaneGeometry(planeWidth, planeHeight)

    // Dispose of previous geometry to prevent memory leaks
    if (meshRef.current.geometry) meshRef.current.geometry.dispose()

    meshRef.current.geometry = geometry

    return () => {
      geometry.dispose() // Clean up when component unmounts
    }
  }, [planeWidth, planeHeight])

  const controls = useControls(
    "vortex",
    {
      ringDistance: { value: 0.05, min: 0.0, max: 1.0, step: 0.00125 },
      maxRings: { value: 5, min: 2, max: 50, step: 1 },
      waveCount: { value: 20, min: 2, max: 100, step: 1 },
      waveDepth: { value: 0.05, min: 0.01, max: 0.2, step: 0.005 },
      yCenter: { value: 1.0, min: 0.0, max: 3.0, step: 0.1 },
      direction: { value: -0.4, min: -3.0, max: 3.0, step: 0.1 },
      time: { value: 0.05, min: 0, max: 1.0, step: 0.01 },
    },
    { collapsed: true }
  )

  const uniforms = useMemo(
    () => ({
      color: { value: new THREE.Color().setFromVector3(convertHexToGLSLRGB("#0075CE")) },
      ringDistance: { value: controls.ringDistance },
      maxRings: { value: controls.maxRings },
      waveCount: { value: controls.waveCount },
      waveDepth: { value: controls.waveDepth },
      yCenter: { value: controls.yCenter },
      direction: { value: controls.direction },
      time: { value: controls.time },
      width: { value: 0 },
      height: { value: 0 },
    }),
    [controls]
  )

  useFrame(({ clock, size, gl }) => {
    if (!materialRef.current) return

    materialRef.current.uniforms.time.value = clock.getElapsedTime() * controls.time
    materialRef.current.uniforms.width.value = size.width * gl.getPixelRatio()
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
    t.current += delta / transitionDuration
    if (t.current > 1) t.current = 1

    materialRef.current.uniforms.color.value = new THREE.Vector4(lerped.r, lerped.g, lerped.b, 1)
  })

  const handlePointerDown = () => {
    currentColor.current = (currentColor.current + 1) % colors.current.length
    t.current = 0
  }

  useEffect(() => {
    handlePointerDown()
  }, [props.currentItem])

  useEffect(() => {
    return () => {
      if (materialRef.current) materialRef.current.dispose()
    }
  }, [])

  return (
    <group position={[0, 0, -6]}>
      <mesh ref={meshRef}>
        <shaderMaterial
          ref={materialRef}
          uniforms={uniforms}
          vertexShader={vertexShaderVortex}
          fragmentShader={fragmentShaderVortex}
        />
      </mesh>
    </group>
  )
}
