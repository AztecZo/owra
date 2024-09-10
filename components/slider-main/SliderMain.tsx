import s from "./slider-main.module.scss"

import cx from "clsx"

import { EmblaCarousel } from "@/components/utility/embla-carousel"
import { Img } from "@/components/utility/img"
import { useRef, useState } from "react"
import { useGSAP } from "@gsap/react"
import { gsap } from "@/lib/gsap"
import { CardBlogProps } from "@/types"

export interface SliderMainProps {
  items: CardBlogProps[]
}

export default function SliderMain(props: SliderMainProps) {
  const ref = useRef(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentSlideUi, setCurrentSlideUi] = useState(currentSlide)

  // const items = [
  //   {
  //     media: { src: "/img/sample.jpg", height: "500", width: "500" },
  //     title: "title",
  //     description: "description",
  //     url: "url",
  //     date: "date",
  //     category: "category",
  //     time: "time",
  //     horizontal: true,
  //   },
  //   {
  //     media: { src: "/img/sample.jpg", height: "500", width: "500" },
  //     title: "title",
  //     description: "description",
  //     url: "url",
  //     date: "date",
  //     category: "category",
  //     time: "time",
  //     horizontal: true,
  //   },
  //   {
  //     media: { src: "/img/sample.jpg", height: "500", width: "500" },
  //     title: "title",
  //     description: "description",
  //     url: "url",
  //     date: "date",
  //     category: "category",
  //     time: "time",
  //     horizontal: true,
  //   },
  //   {
  //     media: { src: "/img/sample.jpg", height: "500", width: "500" },
  //     title: "title",
  //     description: "description",
  //     url: "url",
  //     date: "date",
  //     category: "category",
  //     time: "time",
  //     horizontal: true,
  //   },
  // ]

  useGSAP(
    () => {
      gsap.to(".item-c", {
        opacity: 0,
        duration: 0.4,
        onComplete: () => {
          setCurrentSlideUi(currentSlide)
          gsap.to(".item-c", {
            opacity: 1,
            duration: 0.4,
          })
        },
      })
    },
    {
      dependencies: [currentSlide],
      scope: ref,
    }
  )

  return (
    <div className={cx(s.sliderMain, "grid grid-cols-12")} ref={ref}>
      <div className={cx(s.text, "col-span-4")}>
        {props.items.map((item, i) => {
          return (
            <div className={cx(s.itemC, "item-c", "flex flex-col", { [s.active]: currentSlideUi === i })} key={i}>
              <p className={s.category}>{item.category}</p>
              <p className={s.time}>{item.time}</p>
              <p className={s.title}>{item.title}</p>
              <p className={s.description}>{item.description}</p>
              <p className={s.date}>{item.date}</p>
              <p className={s.link}>Devamını Oku</p>
            </div>
          )
        })}
        <div className={cx(s.buttons, "flex gap-1")}>
          <div
            className={cx(s.btn, "cursor-pointer flex items-center justify-center")}
            onClick={() => setCurrentSlide((prev) => prev - 1)}
          >
            <span>prev</span>
          </div>
          <div
            className={cx(s.btn, "cursor-pointer flex items-center justify-center")}
            onClick={() => setCurrentSlide((prev) => prev + 1)}
          >
            <span>next</span>
          </div>
        </div>
      </div>
      <div className={cx(s.images, "col-span-8")}>
        <EmblaCarousel
          options={{
            loop: true,
          }}
        >
          {props.items.map((item, i) => {
            return (
              <div className={s.imgC} key={i}>
                <Img
                  className="object-cover"
                  src={item.media.src}
                  alt="Blog Cover Photo"
                  height={1000}
                  width={1000}
                  loading="lazy"
                />
              </div>
            )
          })}
        </EmblaCarousel>
      </div>
    </div>
  )
}
