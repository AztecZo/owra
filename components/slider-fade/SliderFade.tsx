import s from "./slider-fade.module.scss"

import cx from "clsx"
import { EmblaCarouselType } from "embla-carousel"
import Autoplay from "embla-carousel-autoplay"
import Fade from "embla-carousel-fade"
import useEmblaCarousel from "embla-carousel-react"
import { ReactNode, useCallback, useEffect, useState } from "react"

import { EmblaCarousel } from "@/components/utility/embla-carousel"
import { NextButton, PrevButton } from "@/components/utility/embla-carousel/buttons"
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons"

export interface SliderFadeProps {
  children: ReactNode[]
  autoplay?: boolean
  onSelectSlide?: (index: number) => void // New prop to pass the current index to the parent
}

export default function SliderFade(props: SliderFadeProps) {
  const { children, autoplay = false, onSelectSlide } = props
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 }, [
    Fade(),
    ...(autoplay ? [Autoplay({ playOnInit: true, delay: 5000, stopOnInteraction: false })] : []),
  ])

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback(
    (emblaApi: EmblaCarouselType) => {
      setPrevBtnDisabled(!emblaApi.canScrollPrev())
      setNextBtnDisabled(!emblaApi.canScrollNext())

      const selectedIndex = emblaApi.selectedScrollSnap()

      // Call the callback to notify the parent of the current index
      if (onSelectSlide) {
        onSelectSlide(selectedIndex)
      }
    },
    [onSelectSlide]
  )

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on("reInit", onInit)
    emblaApi.on("reInit", onSelect)
    emblaApi.on("select", onSelect)
  }, [emblaApi, onInit, onSelect])

  return (
    <div className={s.sliderFade}>
      <EmblaCarousel emblaRef={emblaRef} emblaApi={emblaApi} type="fade">
        {children}
      </EmblaCarousel>

      <div className={cx(s.buttons, "flex items-center justify-between")}>
        <PrevButton
          className={cx(s.prev, "flex items-center justify-center cursor-pointer")}
          onClick={scrollPrev}
          disabled={prevBtnDisabled}
        >
          <ArrowLeftIcon className="w-full h-full" />
        </PrevButton>

        <NextButton
          className={cx(s.next, "flex items-center justify-center cursor-pointer")}
          onClick={scrollNext}
          disabled={nextBtnDisabled}
        >
          <ArrowRightIcon className="w-full h-full" />
        </NextButton>
      </div>
    </div>
  )
}
