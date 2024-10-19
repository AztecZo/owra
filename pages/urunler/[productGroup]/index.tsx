import s from "./product-group.module.scss"

import cx from "clsx"
import { GetServerSidePropsContext } from "next"

import { all } from "@/api/queries/products"
import { Img } from "@/components/utility/img"
import { Link } from "@/components/utility/link"
import { routes } from "@/constants"
import { DefaultLayout } from "@/layouts/default"
import { Locales, ProductCard } from "@/types"

export interface ProductGroupProps {
  productGroup: string
  products: ProductCard[]
  parent: string
}

export default function ProductGroup(props: ProductGroupProps) {
  return (
    <DefaultLayout seo={{ ...routes.blog.seo }}>
      <section className={cx(s.intro, "flex flex-col justify-center")}>
        <h1>{props.parent}</h1>
        <div className={s.breadcrumb}>
          <span>Kategoriler</span>
          <span> / </span>
          <span>{props.parent}</span>
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
              <p>{item.name}</p>
            </Link>
          )
        })}
      </section>
    </DefaultLayout>
  )
}

export async function getServerSideProps({ query, locale }: GetServerSidePropsContext) {
  // console.log("q", query)

  // const products = [
  //   {
  //     id: "1",
  //     productName: "Owra Bardak - 1",
  //     img: "/img/cup.png",
  //     url: "owra-bardak-1",
  //   },
  //   {
  //     id: "2",
  //     productName: "Owra Bardak - 2",
  //     img: "/img/cup.png",
  //     url: "owra-bardak-2",
  //   },
  //   {
  //     id: "3",
  //     productName: "Owra Bardak - 3",
  //     img: "/img/cup.png",
  //     url: "owra-bardak-3",
  //   },
  // ]

  const data = await all(locale as Locales, query.productGroup as string)
  console.log(data)

  if (!data.products) {
    return {
      notFound: true,
    }
  }

  // const data = {
  //   title: "Owra Bardak",
  //   products,
  // }

  return {
    props: {
      productGroup: query.productGroup,
      parent: data.parent,
      products: data.products,
    },
  }
}
