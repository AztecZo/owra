import s from "./slider-products.module.scss"

import cx from "clsx"
import { useEffect, useRef, useState } from "react"

import { SliderFade } from "@/components/slider-fade"
import { Img } from "@/components/utility/img"

export interface SliderProductsProps {}

export default function SliderProducts(props: SliderProductsProps) {
  return (
    <div className={cx(s.sliderProducts, "w-full h-full flex items-center justify-center")}>
      <div className={s.sliderC}>
        <SliderFade>
          <div className={cx(s.slide, "flex flex-col items-center")}>
            <div className={s.imgC}>{<Sequence />}</div>
            <h3 className={s.title}>Owra ile Kalite</h3>
          </div>
          <div className={cx(s.slide, "flex flex-col items-center")}>
            <h3 className={s.title}>Owra ile Eğlence</h3>
          </div>
          <div className={cx(s.slide, "flex flex-col items-center")}>
            <h3 className={s.title}>Owra’nın Farkı</h3>
          </div>
        </SliderFade>
      </div>
    </div>
  )
}

export function Sequence() {
  //   const { currentItem, updateItemRepeatedly } = useUpdateCurrentItem(20) // updates 5 times

  const [currentItem, setCurrentItem] = useState(0)

  const intervalRef = useRef<NodeJS.Timeout | null>(null) // Reference to store the interval ID

  const startLoop = () => {
    if (intervalRef.current) return

    intervalRef.current = setInterval(() => {
      setCurrentItem((prev) => (prev + 1) % 20)
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
    <div className="w-full h-full" onMouseEnter={startLoop} onMouseLeave={stopLoop}>
      <Img
        priority={true}
        className="object-cover"
        alt="Product Visual"
        src={`/img/cup-sequence/bardakgloss.612.${currentItem}.png`}
        height={800}
        width={800}
      />
    </div>
  )
}

const useUpdateCurrentItem = (times: number) => {
  const [currentItem, setCurrentItem] = useState(0)

  console.log(currentItem)

  const updateItemRepeatedly = async () => {
    for (let i = 1; i < times; i++) {
      await new Promise((resolve) => setTimeout(resolve, 100)) // 1 second delay
      setCurrentItem((prev) => (prev + 1) % times) // Reset to 0 when reaching 'times'
    }
  }

  return { currentItem, updateItemRepeatedly }
}
