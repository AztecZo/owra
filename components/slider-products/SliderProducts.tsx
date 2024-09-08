import s from "./slider-products.module.scss"

import cx from "clsx"
import { useEffect, useRef, useState } from "react"

import { SliderFade } from "@/components/slider-fade"
import { Img } from "@/components/utility/img"
import Float from "../animations/float"
import { Canvas } from "@react-three/fiber"
import { WavyVortex } from "../pop-slider"
import { OrthographicCamera } from "@react-three/drei"

export interface SliderProductsProps {}

export default function SliderProducts(props: SliderProductsProps) {
  const seqs = {
    iceGlass: "ice-glass",
    boba: "boba",
  }

  return (
    <div className={cx(s.sliderProducts, "w-full h-full flex items-center justify-center")}>
      <div className={cx(s.sliderC, "z-20")}>
        <SliderFade>
          <div className={cx(s.slide, "flex flex-col items-center")}>
            <Float>
              <div className={s.imgC}>{<Sequence type={seqs.iceGlass} />}</div>
            </Float>
            <h3 className={s.title}>Owra ile Kalite</h3>
          </div>
          <div className={cx(s.slide, "flex flex-col items-center")}>
            <Float>
              <div className={s.imgC}>{<Sequence type={seqs.boba} />}</div>
            </Float>
            <h3 className={s.title}>Owra ile Eğlence</h3>
          </div>
          <div className={cx(s.slide, "flex flex-col items-center")}>
            <Float>
              <div className={s.imgC}>{<Sequence type={seqs.iceGlass} />}</div>
            </Float>
            <h3 className={s.title}>Owra’nın Farkı</h3>
          </div>
        </SliderFade>
      </div>
      <div className="absolute top-10 left-10 right-10 bottom-10 z-10">
        <Canvas>
          <WavyVortex />

          <OrthographicCamera
            makeDefault
            zoom={50} // Control zoom level
            // left={-window.innerWidth / 2}
            // right={window.innerWidth / 2}
            // top={window.innerHeight / 2}
            // bottom={-window.innerHeight / 2}
            near={0.1}
            far={1000}
            position={[0, 0, 100]} // Position the camera in space
          />
        </Canvas>
      </div>
    </div>
  )
}

export function Sequence({ type }: { type: unknown }) {
  const PHASE = 20

  const [currentItem, setCurrentItem] = useState(0)

  const intervalRef = useRef<NodeJS.Timeout | null>(null) // Reference to store the interval ID

  const startLoop = () => {
    if (intervalRef.current) return

    intervalRef.current = setInterval(() => {
      setCurrentItem((prev) => (prev + 1) % PHASE)
    }, 100)
  }

  const stopLoop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  useEffect(() => {
    return () => stopLoop()
  }, [])

  return (
    <div className="w-full h-full relative" onMouseEnter={startLoop} onMouseLeave={stopLoop}>
      {Array.from({ length: PHASE }).map((_, i) => {
        return (
          <div
            className={cx(s.item, "absolute top-0 left-0 bottom-0 right-0", { [s.active]: currentItem === i })}
            key={i}
          >
            <Img
              priority={true}
              className="object-contain"
              alt="Product Visual"
              src={`/img/sequences/${type}/s_${currentItem}.png`}
              height={800}
              width={800}
            />
          </div>
        )
      })}
    </div>
  )
}
