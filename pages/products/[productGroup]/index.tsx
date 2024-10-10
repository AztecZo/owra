import s from "./product-group.module.scss"

import cx from "clsx"

import { Img } from "@/components/utility/img"
import { Link } from "@/components/utility/link"
import { routes } from "@/constants"
import { DefaultLayout } from "@/layouts/default"
import { GetServerSidePropsContext } from "next"

export interface ProductGroupProps {
  productGroup: string
  products: { productName: string; img: string; url: string }[]
}

export default function ProductGroup(props: ProductGroupProps) {
  return (
    <DefaultLayout seo={{ ...routes.blog.seo }}>
      <section className={cx(s.intro, "flex flex-col justify-center")}>
        <h1>Owra X</h1>
        <div className={s.breadcrumb}>
          <span>Kategoriler</span>
          <span> / </span>
          <span>{props.productGroup}</span>
        </div>
      </section>
      <section className={cx(s.products, "flex items-center justify-center flex-wrap gap-10")}>
        {props.products.map((item, i) => {
          return (
            <Link
              href={`/products/${props.productGroup}/${item.url}`}
              className={cx(s.product, "flex flex-col items-center cursor-pointer")}
              key={i}
            >
              <div className={s.imgC}>
                <Img className="object-contain" src={item.img} height={500} width={500} alt="Product Visual" />
              </div>
              <p>{item.productName}</p>
            </Link>
          )
        })}
      </section>
    </DefaultLayout>
  )
}

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  console.log(query)

  const products = [
    {
      productName: "Owra X - 1",
      img: "/img/cup.png",
      url: "owra-x",
    },
    {
      productName: "Owra X - 2",
      img: "/img/cup.png",
      url: "owra-y",
    },
    {
      productName: "Owra X - 3",
      img: "/img/cup.png",
      url: "owra-z",
    },
  ]

  return {
    props: {
      productGroup: query.productGroup,
      products,
    },
  }
}
