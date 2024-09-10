import s from "./blog.module.scss"

import cx from "clsx"

import { all } from "@/api/queries/blog"
import { CardBlog } from "@/components/card-blog"
import { EmblaCarousel } from "@/components/utility/embla-carousel"
import { routes } from "@/constants/index"
import { DefaultLayout } from "@/layouts/default"
import { CardBlogProps } from "@/types"

interface BlogProps {
  blogPage: {
    latestBlog: CardBlogProps[]
    blogs: CardBlogProps[]
  }
}

const Blog = ({ blogPage }: BlogProps) => {
  console.log(blogPage)

  return (
    <DefaultLayout seo={{ ...routes.blog.seo }}>
      <section className={s.intro}>
        <h1>Blog / Haberler</h1>
      </section>
      <section className={s.highlight}>
        <EmblaCarousel>
          {blogPage.latestBlog &&
            blogPage.latestBlog.map((item, i) => {
              return (
                <div className={s.cardC} key={i}>
                  <CardBlog {...item} horizontal />
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
        {blogPage.blogs &&
          blogPage.blogs.map((item, i) => {
            return (
              <div className={s.cardC} key={i}>
                <CardBlog {...item} />
              </div>
            )
          })}
      </section>
    </DefaultLayout>
  )
}

export default Blog

export const getServerSideProps = async () => {
  const blogPage = await all()
  return { props: { blogPage } }
}
