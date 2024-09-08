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
  const ref = useRef<HTMLDivElement | null>(null)
  const windowSize = useWindowSize()

  function getElementOffsetTop(element: HTMLElement): number {
    const rect = element.getBoundingClientRect()
    const scrollTop = window.scrollY || document.documentElement.scrollTop
    return rect.top + scrollTop
  }

  useGSAP(
    () => {
      if (!ref.current) return

      console.log(getElementOffsetTop(ref.current))

      gsap.to(".parallax-item", {
        ...(speedX && { xPercent: 100 * speedX }),
        ...(speedY && { yPercent: 100 * speedY }),
        scrollTrigger: {
          id: "parallax",
          markers: true,
          start: `top top+=${getElementOffsetTop(ref.current)}px`,
          scrub: true,
          trigger: ref.current,
        },
      })
    },
    { scope: ref, dependencies: [speedX, speedY, windowSize.width], revertOnUpdate: true }
  )

  return (
    <div ref={ref} className="inherit-dims">
      <div className="parallax-item">{children}</div>
    </div>
  )
}

export default Parallax
