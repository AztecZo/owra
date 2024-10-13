import s from "./footer.module.scss"

import { gsap, ScrollTrigger } from "@/lib/gsap"
import { useGSAP } from "@gsap/react"
import cx from "clsx"
import { useRef } from "react"

import { IconLinkedin, IconOwraLogo } from "@/components/icons"
import { Img } from "@/components/utility/img"
import { Link } from "@/components/utility/link"

import iceCubes from "@/public/img/ice-cubes-2.png"

export default function Footer() {
  const ref = useRef(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({ paused: true })

      tl.from(
        ".logo-c",
        {
          yPercent: 100,
          scale: 0.9,
        },
        "s"
      ).from(
        ".ice-c",
        {
          yPercent: -80,
          scale: 1.05,
        },
        "s"
      )

      ScrollTrigger.create({
        animation: tl,
        trigger: ref.current,
        scrub: true,
        end: "bottom bottom",
      })
    },
    { scope: ref }
  )

  return (
    <footer className={cx(s.footer, "flex flex-col items-stretch justify-center")} ref={ref}>
      <nav className={cx(s.nav, "flex flex-col items-stretch gap-10 tablet:gap-20")}>
        <div className={cx(s.row, "flex flex-col items-center tablet:flex-row tablet:items-start")}>
          <div className={cx(s.col, "flex flex-col")}>
            <div className={s.navItem}>
              <h6>Sales and Orders</h6>
              <p>sales@owra.com</p>
            </div>
            <div className={s.navItem}>
              <h6>General Questions</h6>
              <p>sales@owra.com</p>
            </div>
          </div>
          <div className={cx(s.col, "flex flex-col")}>
            <div className={s.navItem}>
              <h6>Address</h6>
              <p>Kızılay Mahallesi, Atatürk Bulvarı No:123,Çankaya, 06420 Ankara, Türkiye</p>
            </div>
          </div>
        </div>
        <div
          className={cx(s.copyright, "flex flex-col items-center justify-between tablet:flex-row tablet:items-end ")}
        >
          <span>©2024 Owra</span>
          <span className={cx(s.social, "flex")}>
            <div className={s.iconC}>
              <IconLinkedin fill="var(--black)" />
            </div>
            <div className={s.iconC}>
              <IconLinkedin fill="var(--black)" />
            </div>
            <div className={s.iconC}>
              <IconLinkedin fill="var(--black)" />
            </div>
            <div className={s.iconC}>
              <IconLinkedin fill="var(--black)" />
            </div>
            <div className={s.iconC}>
              <IconLinkedin fill="var(--black)" />
            </div>
          </span>
          <span>
            Made by{" "}
            <Link className="underline" href="https://bytemywork.com">
              Byte My Work
            </Link>
          </span>
        </div>
      </nav>

      <div className={cx(s.logoC, "logo-c")}>
        <IconOwraLogo />
      </div>

      <div className={cx(s.iceC, "ice-c")}>
        <Img src={iceCubes} alt="Ice Cubes" />
      </div>
    </footer>
  )
}
