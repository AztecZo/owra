import s from "./slider-products.module.scss"

import { OrthographicCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import cx from "clsx"
import { useTranslations } from "next-intl"
import { useEffect, useRef, useState } from "react"

import Float from "@/components/animations/float"
import { IconArrow } from "@/components/icons"
import { SliderFade } from "@/components/slider-fade"
import { Img } from "@/components/utility/img"
import { Link } from "@/components/utility/link"
import { Vortex } from "@/components/vortex"

export default function SliderProducts() {
  const t = useTranslations("productSlider")

  const seqs = {
    iceGlass: "ice-glass",
    boba: "boba",
    coffee: "coffee",
  }

  const [currentSlide, setCurrentSlide] = useState(0)

  const handleSelectSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className={cx(s.sliderProducts, "w-full h-full flex items-center justify-center")}>
      <div className={cx(s.sliderC, "z-20")}>
        <SliderFade onSelectSlide={handleSelectSlide} autoplay>
          <div className={cx(s.slide, "flex flex-col items-center")}>
            <Float amountY={[-3, 3]}>
              <div className={s.imgC}>{<Sequence type={seqs.iceGlass} />}</div>
            </Float>
            <div className={s.text}>
              <h3 className={s.title}>{t("s1.title")}</h3>
            </div>
          </div>
          <div className={cx(s.slide, "flex flex-col items-center")}>
            <Float amountY={[-3, 3]}>
              <div className={s.imgC}>{<Sequence type={seqs.boba} />}</div>
            </Float>
            <div className={s.text}>
              <h3 className={s.title}>{t("s2.title")}</h3>
            </div>
          </div>
          <div className={cx(s.slide, "flex flex-col items-center")}>
            <Float amountY={[-3, 3]}>
              <div className={s.imgC}>{<Sequence type={seqs.coffee} />}</div>
            </Float>
            <div className={s.text}>
              <h3 className={s.title}>{t("s3.title")}</h3>
            </div>
          </div>
        </SliderFade>
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0 z-0">
        <Canvas dpr={2}>
          <Vortex currentItem={currentSlide} />
          <OrthographicCamera makeDefault zoom={50} near={0.1} far={1000} position={[0, 0, 100]} />
        </Canvas>
      </div>
      <Link
        className={cx(
          s.cta,
          "absolute bottom-auto tablet:bottom-5 right-2 tablet:right-5 top-2 tablet:top-0 flex items-center gap-2 cursor-pointer"
        )}
        href="/showcase"
      >
        <span>{t("cta.title")}</span>
        <span className={s.iconC}>
          <div className="w-full h-full">
            <IconArrow fill="var(--science-blue)" />
          </div>
        </span>
      </Link>
    </div>
  )
}

export function Sequence({ type }: { type: unknown }) {
  const PHASE = 22

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
            className={cx(s.item, "absolute top-0 left-0 bottom-0 right-0", {
              [s.active]: currentItem === i,
            })}
            key={i}
          >
            <Img
              priority={true}
              className="object-contain"
              alt="Product Visual"
              src={`/img/sequences/${type}/s_${i}.png`}
              height={800}
              width={800}
            />
          </div>
        )
      })}
    </div>
  )
}
