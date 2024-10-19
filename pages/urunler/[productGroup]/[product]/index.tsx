import s from "./product.module.scss"

import cx from "clsx"
import { GetServerSidePropsContext } from "next"
import { useState } from "react"

import { Img } from "@/components/utility/img"
import { Link } from "@/components/utility/link"
import { routes } from "@/constants"
import { DefaultLayout } from "@/layouts/default"
import { Locales, Product } from "@/types"
import { single } from "@/api/queries/product-detail"
import { useTheme } from "@/lib/store/theme"
import { useIsomorphicLayoutEffect } from "usehooks-ts"

export interface ProductGroupProps {
  productGroup: string
  product: Product
}

export default function ProductGroup(props: ProductGroupProps) {
  const [currentItem, setCurrentItem] = useState(0)
  const theme = useTheme()

  console.log(props.product)

  useIsomorphicLayoutEffect(() => {
    theme.setColors(props.product.textcolor, props.product.backgroundColor)
    return () => theme.setColors(null, null)
  }, [props.product.textcolor, props.product.backgroundColor])

  return (
    <DefaultLayout seo={{ ...routes.blog.seo }}>
      <section className={cx(s.intro, "flex flex-col justify-center")}>
        <div className={s.breadcrumb}>
          <Link href="/products">Kategoriler</Link>
          <span> / </span>
          <Link href={`/products/${props.productGroup}`}>{props.product.parent}</Link>
          <span> / </span>
          <span>{props.product.name}</span>
        </div>
      </section>
      <section className={cx(s.product, "flex flex-col tablet:grid grid-cols-12 gap-0 tablet:gap-20")}>
        <div className="col-span-6 flex flex-col-reverse tablet:grid grid-cols-12 gap-2 tablet:gap-4">
          <div className={cx(s.imgs, "col-span-2 flex flex-row tablet:flex-col justify-center gap-2")}>
            {props.product.images.map((item, i) => {
              return (
                <div
                  className={cx(s.imgC, "cursor-pointer", { [s.active]: currentItem === i })}
                  key={i}
                  onClick={() => setCurrentItem(i)}
                >
                  <Img className="object-contain" src={item.img} height={500} width={500} alt="Product Visual" />
                </div>
              )
            })}
          </div>
          <div className="col-span-10">
            <div className={s.mainImgC}>
              <Img
                className="object-contain"
                src={props.product.images[currentItem].img}
                height={500}
                width={500}
                alt="Product Visual"
              />
            </div>
          </div>
        </div>
        <div className={cx(s.info, "col-span-6")}>
          <div className={s.volume}>{props.product.volume}</div>
          <div className={s.name}>{props.product.name}</div>
          <div className={s.size}>{props.product.size}</div>
          <div className={s.desc}>{props.product.description}</div>
          <div className={cx(s.other)}>
            <div className={s.title}>Diğer Seçenekler</div>
            <div className={cx(s.items, "flex items-center justify-center tablet:justify-start gap-3 flex-wrap")}>
              {props.product.other.map((item, i) => {
                return (
                  <Link
                    href={`/products/${props.productGroup}/${item.url}`}
                    className={cx(s.imgC, "cursor-pointer")}
                    key={i}
                  >
                    <Img className="object-contain" src={item.image} height={500} width={500} alt="Product Visual" />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  )
}

export async function getServerSideProps({ query, locale }: GetServerSidePropsContext) {
  // console.log("q", query)

  //   const product = JSON.parse(`{
  //         "id": 1,
  //         "name": "Owra Boba",
  //         "size": "Small",
  //         "volume": "330ml",
  //         "description": "Sıcak yaz günlerinde serinlemenin en güzel yolu Owra Buz ile tanışın! %100 saf su kullanılarak üretilen buzlarımız, içeceklerinizi soğutmak ve serinletici anlar yaşatmak için idealdir. İster evde, ister iş yerinde, isterse de özel davetlerde kullanın; Owra Buz her zaman tazeliği ve kalitesiyle yanınızda.",
  //         "images": [
  //             {
  //                 "id": 101,
  //                 "thumbnail": "/img/cup.png",
  //                 "full": "/img/cup.png"
  //             },
  //             {
  //                 "id": 102,
  //                  "thumbnail": "/img/cup.png",
  //                 "full": "/img/cup.png"
  //             },
  //             {
  //                 "id": 103,
  //                  "thumbnail": "/img/cup.png",
  //                 "full": "/img/cup.png"
  //             }
  //         ],
  //         "other": [
  //             {
  //                 "id": 1,
  //                 "size": "Small",
  //                 "image": "/img/cup.png"
  //             },
  //             {
  //                 "id": 2,
  //                 "size": "Medium",
  //                 "image": "/img/cup.png"
  //             },
  //             {
  //                 "id": 3,
  //                 "size": "Large",
  //                 "image": "/img/cup.png"
  //             }
  //         ]

  // }`)

  const product = await single(locale as Locales, query.product as string)

  if (!product) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      productGroup: query.productGroup,
      productName: query.product,
      product,
    },
  }
}
