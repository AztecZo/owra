import s from "./embla.module.scss"

import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel"
import { EmblaViewportRefType } from "embla-carousel-react"
import React, { ReactNode } from "react"

interface Props {
  children: ReactNode[]
  options?: EmblaOptionsType
  emblaRef?: EmblaViewportRefType
  emblaApi?: EmblaCarouselType | undefined
  scrollTo?: number
}

const EmblaCarousel = (props: Props) => {
  const { children, emblaRef } = props

  return (
    <div className={s.embla}>
      <div className={s.emblaViewport} ref={emblaRef}>
        <div className={s.emblaContainer}>
          {children?.map((item, i) => (
            <div className={s.emblaSlide} key={i}>
              <div className={s.emblaSlideContent}>{item}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
