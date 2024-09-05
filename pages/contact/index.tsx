import s from "./contact.module.scss"

import { DefaultLayout } from "@/layouts/default"

import { routes } from "@/constants"

export interface ContactProps {}

export default function Contact(props: ContactProps) {
  return (
    <DefaultLayout seo={{ ...routes.blog.seo }}>
      <div className={s.intro}></div>
    </DefaultLayout>
  )
}
