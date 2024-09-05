import s from "./header.module.scss"

import cx from "clsx"
import { useRef } from "react"

import { Link } from "@/components/utility/link"
import { Marquee } from "@/components/animations/marquee"
import { IconOwraLogo, IconPointer } from "@/components/icons"

export default function Header() {
  const ref = useRef(null)

  return (
    <>
      <div className={s.marquee}>
        <Marquee repeat={10}>
          <div className={cx(s.feelingThirsty, "flex items-center")}>
            <small>Feeling Thirsty?</small>
            <span className={s.iconC}>
              <IconPointer fill="var(--white)" />
            </span>
          </div>
        </Marquee>
      </div>

      <header className={cx(s.header, "flex items-center justify-between")} ref={ref}>
        <Link className={cx(s.logoC, "cursor-pointer")} href="/">
          <IconOwraLogo />
        </Link>

        <nav className={cx(s.nav, "flex items-center justify-between")}>
          <div className={s.navItem}>
            <Link href="/about-us">Hakkımızda</Link>
          </div>
          <div className={s.navItem}>
            <Link href="/products">Ürünler</Link>
          </div>
          <div className={s.navItem}>
            <Link href="/blog">Blog</Link>
          </div>
        </nav>

        <nav className={cx(s.nav, "flex items-center justify-between")}>
          <div className={s.navItem}>
            <Link href="/franchise">Franchise</Link>
          </div>
          <div className={s.navItem}>
            <Link href="/contact">İletişim</Link>
          </div>
          <div className={s.navItem}>
            <>EN</>
          </div>
        </nav>
      </header>
    </>
  )
}
