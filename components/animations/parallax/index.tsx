"use client"

import { gsap } from "@/lib/gsap"
import { useGSAP } from "@gsap/react"
import { ReactNode, useRef } from "react"
import { useWindowSize } from "usehooks-ts"

interface Parallax {
  children: ReactNode
  speedX?: number
  speedY: number
}

const Parallax = (props: Parallax) => {
  const { children, speedX, speedY } = props
  const ref = useRef<HTMLDivElement>(null)
  const windowSize = useWindowSize()

  useGSAP(
    () => {
      gsap.to(ref.current, {
        ...(speedX && { xPercent: 100 * speedX }),
        ...(speedY && { yPercent: 100 * speedY }),
        scrollTrigger: {
          id: "parallax",
          markers: false,
          start: `top top+=${ref.current?.getBoundingClientRect().top}px`,
          scrub: true,
          trigger: ref.current,
        },
      })
    },
    { scope: ref, dependencies: [speedX, speedY, windowSize.width], revertOnUpdate: true }
  )

  return (
    <div ref={ref} className="inherit-dims">
      {children}
    </div>
  )
}

export { Parallax }
