import s from "./post.module.scss"

import cx from "clsx"
import { GetServerSideProps } from "next"
import { useRouter } from "next/router"
import { useState } from "react"
import { useIsomorphicLayoutEffect } from "usehooks-ts"

import { Marquee } from "@/components/animations/marquee"
import { Img } from "@/components/utility/img"
import { Link } from "@/components/utility/link"
import { routes } from "@/constants"
import { DefaultLayout } from "@/layouts/default"
import { BlogProps } from "@/types"
import { SliderMain } from "@/components/slider-main"

type Props = BlogProps

const Post = (props: Props) => {
  const router = useRouter()
  const [copied, setCopied] = useState(false)

  useIsomorphicLayoutEffect(() => {
    const timeout = setTimeout(() => {
      setCopied(false)
    }, 1000)

    return () => clearTimeout(timeout)
  }, [copied])

  return (
    <DefaultLayout seo={{ title: `Blog | ${props.header.title}`, description: props.header.title }}>
      <section className={cx(s.intro, "grid grid-cols-12")}>
        <div className={cx(s.info, "flex flex-col col-start-7 col-end-12")}>
          <div className={s.breadcrumb}>
            <small>
              <Link href={`/${routes.blog.path}`}>Blog</Link>
            </small>
            <small className={s.separator}> / </small>
            <small>{props.header.title}</small>
          </div>

          <small className={s.time}>{props.header.time}</small>

          <h1 className={s.title}>{props.header.title}</h1>

          <p className={s.description}>{props.header.description}</p>

          <small className={s.date}>{props.header.date}</small>
        </div>

        <div className={s.banner}>
          <Img
            alt="Blog Banner"
            className="object-cover"
            priority={true}
            src={props.header.media.src}
            height={parseFloat(props.header.media.height as string)}
            width={parseFloat(props.header.media.width as string)}
          />
        </div>
      </section>

      {/* <section className={s.postBody}>
        <BlogBody {...props} />
      </section> */}

      <section className={s.other}>
        <Link
          href={`/${routes.blog.path}/${props.nextPost}`}
          className={cx(s.marquee, "cursor-pointer")}
          ariaLabel={"Continue to the Next Post"}
        >
          <Marquee duration={30} repeat={4} inverted>
            <h5>Sıradaki İçerik</h5>
          </Marquee>
        </Link>
        <div className={s.sliderC}>
          <SliderMain />
        </div>
      </section>
    </DefaultLayout>
  )
}

export default Post

export const getServerSideProps: GetServerSideProps = async (context) => {
  // const res = await apiClient.get("/newsDetail.php", {
  //   params: {
  //     url: context.query.post,
  //   },
  // })

  const post: BlogProps = {
    header: {
      category: "category",
      title: "title",
      date: "date",
      description: "description",
      time: "time",
      media: { src: "/img/sample.jpg", height: "500", width: "500" },
    },
    nextPost: "/blog-2",
  }

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: post,
  }
}
