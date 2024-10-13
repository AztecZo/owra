import s from "./header.module.scss"

import { Cross2Icon, HamburgerMenuIcon } from "@radix-ui/react-icons"
import cx from "clsx"
import { useEffect, useRef, useState } from "react"

import { Marquee } from "@/components/animations/marquee"
import { IconOwraLogo, IconPointer } from "@/components/icons"
import { Img } from "@/components/utility/img"
import { Link } from "@/components/utility/link"
import { useLenisStore } from "@/lib/store/lenis"
import { useModalStore } from "@/lib/store/modal"

export default function Header() {
  const ref = useRef(null)
  const modalStore = useModalStore()
  const { lenis } = useLenisStore()
  const [hamburgerOpen, setHamburgerOpen] = useState(false)

  useEffect(() => {
    return hamburgerOpen ? lenis?.stop() : lenis?.start()
  }, [hamburgerOpen, lenis])

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

        <div
          className={cx(s.trigger, "block tablet:hidden", { [s.active]: hamburgerOpen })}
          onClick={() => setHamburgerOpen((prev) => !prev)}
        >
          {hamburgerOpen ? <Cross2Icon className="w-full h-full" /> : <HamburgerMenuIcon className="w-full h-full" />}
        </div>

        <nav
          className={cx(
            s.navC,
            "flex flex-col tablet:flex-row items-center justify-center tablet:justify-between flex-1 gap-5",
            {
              [s.active]: hamburgerOpen,
            }
          )}
        >
          <div className="flex flex-col tablet:flex-row items-center justify-between tablet:justify-center gap-5 tablet:gap-10">
            <div className={s.navItem}>
              <Link href="/about-us">Hakkımızda</Link>
            </div>
            <div className={s.navItem}>
              <Link href="/products">Ürünler</Link>
            </div>
            <div className={s.navItem}>
              <Link href="/blog">Blog</Link>
            </div>
          </div>

          <div className="flex flex-col tablet:flex-row items-center justify-between tablet:justify-center gap-5 tablet:gap-10">
            <div className={s.navItem}>
              <Link href="/franchise">Franchise</Link>
            </div>
            <div className={s.navItem}>
              <Link href="/contact">İletişim</Link>
            </div>
            {/* <div className={s.navItem}>
            <>EN</>
          </div> */}
          </div>
        </nav>
      </header>
    </>
  )
}
