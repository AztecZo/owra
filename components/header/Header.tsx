import s from "./header.module.scss"

import cx from "clsx"
import { useRef } from "react"

import { Link } from "@/components/utility/link"

export default function Header() {
  const ref = useRef(null)

  return (
    <header className={cx(s.header, "flex items-center justify-between")} ref={ref}>
      <nav className={cx(s.nav, "flex items-center justify-between")}>
        <div className={s.navItem}>
          <Link href="/hakkimizda">Hakkımızda</Link>
        </div>
        <div className={s.navItem}>
          <Link href="/ürünler">Ürünler</Link>
        </div>
        <div className={s.navItem}>
          <Link href="/blog">Blog</Link>
        </div>
      </nav>

      <nav className={cx(s.nav, "flex items-center justify-between")}>
        <div className={s.navItem}>
          <Link href="/iletisim">İletişim</Link>
        </div>
        <div className={s.navItem}>
          <>EN</>
        </div>
      </nav>
    </header>
  )
}
