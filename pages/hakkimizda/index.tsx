import s from "./about.module.scss"

import cx from "clsx"
import { GetStaticPropsContext } from "next"
import { useLocale, useTranslations } from "next-intl"

import { Marquee } from "@/components/animations/marquee"
import { Button } from "@/components/button"
import { IconStar } from "@/components/icons"
import { Img } from "@/components/utility/img"
import { Link } from "@/components/utility/link"
import { DefaultLayout } from "@/layouts/default"
import { routes } from "@/lib/constants"
import { Locales } from "@/types"

export default function About() {
  const t = useTranslations("about")
  const locale = useLocale()

  return (
    <DefaultLayout seo={routes[locale as Locales].about.seo}>
      <div className={cx(s.intro, "grid grid-cols-1 tablet:grid-cols-2 gap-0 tablet:gap-20")}>
        <div className={s.imgC}>
          <Img className="object-cover" src={"/img/sample.jpg"} alt="Sample" width={2000} height={2000} />
        </div>
        <div className={s.text}>
          <h1>
            <span>{t("intro.heading.p1")}</span>
            <span>{t("intro.heading.p2")}</span>
          </h1>
          <p>{t("intro.text")}</p>
        </div>
      </div>

      <section className={s.marqueeC}>
        <Marquee repeat={5}>
          <div className="flex items-center">
            <h2>{t("marquee")}</h2>
            <span className={s.iconC}>
              <IconStar fill="var(--science-blue)" />
            </span>
          </div>
        </Marquee>
      </section>

      <section className={cx(s.purpose, "grid grid-cols-1 tablet:grid-cols-2")}>
        <div className="flex flex-col items-center justify-center">
          <h2>{t("mission.heading")}</h2>
          <p>{t("mission.text")}</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h2>{t("vision.heading")}</h2>
          <p>{t("vision.text")}</p>
        </div>
      </section>

      <section className={s.pros}>
        <div className={s.imgC}>
          <Img className="object-cover" src={"/img/sample.jpg"} alt="Sample" width={2000} height={2000} />
        </div>
        <div className={cx(s.items, "grid grid-cols-1 tablet:grid-cols-4")}>
          <div className="flex flex-col items-center justify-start">
            <span className={s.iconC}>
              <IconStar fill="var(--science-blue)" />
            </span>
            <h3>{t("values.quality.heading")}</h3>
            <p>{t("values.quality.text")}</p>
          </div>
          <div className="flex flex-col items-center justify-start">
            <span className={s.iconC}>
              <IconStar fill="var(--science-blue)" />
            </span>
            <h3>{t("values.fun.heading")}</h3>
            <p>{t("values.fun.text")}</p>
          </div>
          <div className="flex flex-col items-center justify-start">
            <span className={s.iconC}>
              <IconStar fill="var(--science-blue)" />
            </span>
            <h3>{t("values.trust.heading")}</h3>
            <p>{t("values.trust.text")}</p>
          </div>
          <div className="flex flex-col items-center justify-start">
            <span className={s.iconC}>
              <IconStar fill="var(--science-blue)" />
            </span>
            <h3>{t("values.innovation.heading")}</h3>
            <p>{t("values.innovation.text")}</p>
          </div>
        </div>
      </section>

      <section className={cx(s.franchise, "flex flex-col items-center")}>
        <p>{t("franchise.text")}</p>
        <Link className={s.cta} href={`/${routes[locale as Locales].franchise.path}`}>
          <Button>{t("franchise.cta")}</Button>
        </Link>
      </section>

      <section className={cx(s.career, "flex flex-col-reverse tablet:grid grid-cols-1 tablet:grid-cols-2 gap-10")}>
        <div className={cx(s.text, "flex flex-col items-center justify-center")}>
          <p>{t("career.text")}</p>
          <Link className={s.cta} href="mailto:careers@owra.co">
            <Button theme="white">{t("career.cta")}</Button>
          </Link>
        </div>
        <div>
          <div className={s.imgC}>
            <Img className="object-cover" src={"/img/sample.jpg"} alt="Sample" width={2000} height={2000} />
          </div>
        </div>
      </section>
    </DefaultLayout>
  )
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`@/messages/${locale}.json`)).default,
    },
  }
}
