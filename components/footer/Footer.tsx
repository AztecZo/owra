import s from "./footer.module.scss"

import cx from "clsx"

import { IconLinkedin, IconOwraLogo } from "@/components/icons"
import { Img } from "@/components/utility/img"
import { Link } from "@/components/utility/link"

import iceCubes from "@/public/img/ice-cubes-2.png"

export interface FooterProps {}

export default function Footer(props: FooterProps) {
  return (
    <footer className={cx(s.footer, "flex flex-col items-stretch justify-center")}>
      <nav className={cx(s.nav, "flex flex-col items-stretch")}>
        <div className={cx(s.row, "flex")}>
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
        <div className={cx(s.copyright, "flex items-end justify-between")}>
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

      <div className={s.logoC}>
        <IconOwraLogo />
      </div>

      <div className={s.iceC}>
        <Img src={iceCubes} alt="Ice Cubes" />
      </div>
    </footer>
  )
}
