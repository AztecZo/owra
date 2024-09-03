import s from "./blog.module.scss"

import cx from "clsx"

import { CardBlog } from "@/components/card-blog"
import { EmblaCarousel } from "@/components/utility/embla-carousel"
import { routes } from "@/constants/index"
import { DefaultLayout } from "@/layouts/default"
import { CardBlogProps } from "@/types"

const Blog = () => {
  const cardBlogProps: CardBlogProps = {
    media: { src: "/img/sample.jpg", height: "500", width: "500" },
    title: "title",
    description: "description",
    url: "url",
    date: "date",
    category: "category",
    time: "time",
    horizontal: true,
  }

  const cardBlogProps2: CardBlogProps = {
    media: { src: "/img/sample.jpg", height: "500", width: "500" },
    title: "title",
    description: "description",
    url: "url",
    date: "date",
    category: "category",
    time: "time",
    horizontal: false,
  }

  return (
    <DefaultLayout seo={{ ...routes.blog.seo }}>
      <section className={s.intro}>
        <h1>Blog / Haberler</h1>
      </section>
      <section className={s.highlight}>
        <EmblaCarousel>
          {Array.from("x".repeat(5)).map((item, i) => {
            return (
              <div className={s.cardC} key={i}>
                <CardBlog {...cardBlogProps} />
              </div>
            )
          })}
        </EmblaCarousel>
      </section>
      {/* <div className="w-screen h-screen">
        <video
          src="https://hosting.photobucket.com/d20f04cd-08a2-41e6-8fdc-2964c51480bb/9b126534-e77f-4d8b-94af-0b6465e8cb98.mp4"
          autoPlay
          muted
          playsInline
        ></video>
      </div> */}
      <section className={cx(s.content, "grid grid-cols-3")}>
        {Array.from("x".repeat(5)).map((item, i) => {
          return (
            <div className={s.cardC} key={i}>
              <CardBlog {...cardBlogProps2} />
            </div>
          )
        })}
      </section>
    </DefaultLayout>
  )
}

export default Blog
