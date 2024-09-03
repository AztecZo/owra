import s from "./card-blog.module.scss"

import cn from "clsx"

import { routes } from "@/constants"
import { CardBlogProps } from "@/types"
import { Link } from "@/components/utility/link"
import { Img } from "@/components/utility/img"

type Props = CardBlogProps

const CardBlog = (props: Props) => {
  return (
    <Link
      href={`${routes.blog.path}/${props.url}`}
      className={cn(s.cardBlog, "cursor-pointer", { [s.horizontal]: props.horizontal })}
    >
      <div className={s.imgC}>
        <Img
          className="object-cover"
          src={props.media.src}
          alt="Blog Cover Photo"
          height={parseFloat(props.media.height as string)}
          width={parseFloat(props.media.width as string)}
          loading="lazy"
        />
      </div>
      <div className={s.text}>
        <p className={s.category}>{props.category}</p>
        <p className={s.time}>{props.time}</p>
        <p className={s.title}>{props.title}</p>
        <p className={s.description}>{props.description}</p>
        <p className={s.date}>{props.date}</p>
        <p className={s.link}>Devamını Oku</p>
      </div>
      <div></div>
    </Link>
  )
}
export { CardBlog }
