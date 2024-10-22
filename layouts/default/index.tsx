import s from "./default-layout.module.scss"

import cx from "clsx"
import { useRouter } from "next/router"
import { ReactNode, useEffect } from "react"
import { gsap } from "@/lib/gsap"

import { CustomHead } from "@/components/utility/custom-head"

import { baseUrl } from "@/lib/constants"
import { CursorType, Seo } from "@/types"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useCursorStore } from "@/lib/store/cursor"
import { useLenisStore } from "@/lib/store/lenis"

type Props = {
  children: ReactNode
  seo: Seo
  theme?: "dark" | "light"
}

const DefaultLayout = ({ children, seo, theme = "light" }: Props) => {
  const router = useRouter()
  const cursorStore = useCursorStore()
  const { lenis } = useLenisStore()

  useEffect(() => {
    if (cursorStore.type !== CursorType.default) cursorStore.reset()
  }, [])

  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true })
  }, [lenis])

  useEffect(() => {
    gsap.from(".gsap-transition", {
      opacity: 0,
      duration: 0.4,
      delay: 0.2,
    })
  }, [])

  return (
    <div className={cx(s.defaultLayout, `theme-${theme}`, "gsap-transition opacity-0")}>
      <CustomHead
        {...(seo &&
          Object.assign(seo, {
            canonical: `${baseUrl}${router.pathname}`,
            keywords: ["ice", "coffee", "ice glass", "bubble tea"],
          }))}
      />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export { DefaultLayout }
