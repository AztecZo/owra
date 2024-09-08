import { Html, useProgress } from "@react-three/drei"

export function LoadingScreen() {
  const { progress } = useProgress()

  return (
    <Html center>
      <div className="w-screen h-screen bg-lime-300 flex items-center justify-center">
        <span>Loading {progress.toFixed(2)}%</span>
      </div>
    </Html>
  )
}
