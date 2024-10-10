import s from "./contact.module.scss"

import cx from "clsx"

import { FormContact } from "@/components/form-contact"
import { routes } from "@/constants"
import { DefaultLayout } from "@/layouts/default"

export interface ContactProps {}

export default function Contact(props: ContactProps) {
  return (
    <DefaultLayout seo={{ ...routes.blog.seo }}>
      <section className={cx(s.contact, "grid grid-cols-1 tablet:grid-cols-2")}>
        <div className={s.text}>
          <h5>Bizimle İletişime Geçin</h5>
          <div className={cx(s.items, "flex flex-col items-center tablet:items-start")}>
            <div className="flex flex-col">
              <h3>Telefon:</h3>
              <p>+90 555 555 55 55</p>
            </div>
            <div className="flex flex-col">
              <h3>Email:</h3>
              <p>sales@owra.com</p>
            </div>
            <div className="flex flex-col">
              <h3>Adres:</h3>
              <p>4004 Eagle Lane, Strathcona Minnesota 56759</p>
            </div>
          </div>
        </div>
        <div className={s.formContactC}>
          <FormContact />
        </div>
      </section>
    </DefaultLayout>
  )
}
