import s from "./products.module.scss"

import cx from "clsx"

import { Img } from "@/components/utility/img"
import { Link } from "@/components/utility/link"
import { routes } from "@/constants"
import { DefaultLayout } from "@/layouts/default"

export interface ProductsProps {}

export default function Products(props: ProductsProps) {
  const products = [
    {
      id: "1",
      productName: "Bardak",
      img: "/img/cup.png",
      url: "owra-bardak",
    },
    {
      id: "2",
      productName: "Boba",
      img: "/img/cup.png",
      url: "owra-boba",
    },
    {
      id: "3",
      productName: "Kahve",
      img: "/img/cup.png",
      url: "owra-kahve",
    },
  ]

  return (
    <DefaultLayout seo={{ ...routes.blog.seo }}>
      <section className={cx(s.intro, "flex items-center justify-center")}>
        <h1>Ürün Grupları</h1>
      </section>
      <section className={cx(s.products, "flex items-center justify-center flex-wrap gap-10")}>
        {products.map((item, i) => {
          return (
            <Link
              href={`/products/${item.url}`}
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
