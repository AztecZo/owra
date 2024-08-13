import s from "./header.module.scss"

import cx from "clsx"
import { useRef } from "react"

import { Link } from "@/components/utility/link"

export default function Header() {
  const ref = useRef(null)

  return (
    <header className={cx(s.header, "flex items-center")} ref={ref}>
      <nav className={cx(s.nav, "flex items-center justify-between flex-1")}>
        <div className={cx(s.part, "flex items-center")}>
          <div className={s.navItem}>
            <Link href="/hakkimizda">Hakkımızda</Link>
          </div>
          <div className={s.navItem}>
            <Link href="/ürünler">Ürünler</Link>
          </div>
          <div className={s.navItem}>
            <Link href="/blog">Blog</Link>
          </div>
        </div>

        <div className={cx(s.part, "flex items-center")}>
          <div className={s.navItem}>
            <Link href="/iletisim">İletişim</Link>
          </div>

          <div className={s.navItem}>
            <>EN</>
          </div>
        </div>
      </nav>
    </header>
  )
}
