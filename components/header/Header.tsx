import s from "./header.module.scss"

import cx from "clsx"
import { useRef } from "react"

import { Link } from "@/components/utility/link"
import { Marquee } from "@/components/animations/marquee"
import { IconOwraLogo, IconPointer } from "@/components/icons"
import { useModalStore } from "@/lib/store/modal"
import { Cross2Icon } from "@radix-ui/react-icons"
import { Img } from "../utility/img"

export default function Header() {
  const ref = useRef(null)
  const modalStore = useModalStore()

  function handleModal() {
    modalStore.setIsOpen(true)
    modalStore.setContent(
      <>
        <div className={cx(s.modalContent, "h-10 w-10 bg-white")}>
          <div className={cx(s.header, "flex items-center justify-between")}>
            <p className={s.title}>Feeling Thirsty?</p>
            <span className={cx(s.iconC, "cursor-pointer")} onClick={() => modalStore.setIsOpen(false)}>
              <Cross2Icon className="w-full h-full" />
            </span>
          </div>

          <div className={cx(s.content, "flex flex-col items-center tablet:items-start")}>
            <p>If you’re craving your favorite frozen concoction, drop us an email.</p>
            <p>We promise it’s worth the brain freeze!</p>
            <Link className={s.buttonDrop} href="mailto:sales@owra.co">
              Drop a Line & Chill
            </Link>
          </div>

          <div className={s.iceC}>
            <Img alt="Ice Cube Sitting" src={"/img/ice-2.png"} height={500} width={500} className="object-contain" />
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <div className={cx(s.marquee, "cursor-pointer")} onClick={handleModal}>
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
          {/* <div className={s.navItem}>
            <>EN</>
          </div> */}
        </nav>
      </header>
    </>
  )
}
