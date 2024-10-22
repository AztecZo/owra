import s from "./product-group.module.scss"

import cx from "clsx"
import { GetServerSidePropsContext } from "next"
import { useLocale } from "next-intl"

import { all } from "@/api/queries/products"
import { Img } from "@/components/utility/img"
import { Link } from "@/components/utility/link"
import { DefaultLayout } from "@/layouts/default"
import { routes } from "@/lib/constants"
import { Locales, ProductCard } from "@/types"

export interface ProductGroupProps {
  productGroup: string
  products: ProductCard[]
  parent: string
}

export default function ProductGroup(props: ProductGroupProps) {
  const locale = useLocale()

  return (
    <DefaultLayout seo={routes[locale as Locales].products.seo}>
      <section className={cx(s.intro, "flex flex-col justify-center")}>
        <h1>{props.parent}</h1>
        <div className={s.breadcrumb}>
          <Link href={`/${routes[locale as Locales].products.path}`}>Kategoriler</Link>
          <span> / </span>
          <span>{props.parent}</span>
        </div>
      </section>
      <section className={cx(s.products, "flex items-center justify-center flex-wrap gap-10")}>
        {props.products.map((item, i) => {
          return (
            <Link
              href={`/${routes[locale as Locales].products.path}/${props.productGroup}/${item.url}`}
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
  const data = await all(locale as Locales, query.productGroup as string)

  if (!data.products) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      productGroup: query.productGroup,
      parent: data.parent,
      products: data.products,
      messages: (await import(`@/messages/${locale}.json`)).default,
    },
  }
}
