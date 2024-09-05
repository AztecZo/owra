import { routes } from "@/constants"
import s from "./products.module.scss"

import { DefaultLayout } from "@/layouts/default"

export interface ProductsProps {}

export default function Products(props: ProductsProps) {
  return (
    <DefaultLayout seo={{ ...routes.blog.seo }}>
      <div className={s.intro}></div>
    </DefaultLayout>
  )
}
