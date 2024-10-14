import s from "./contact.module.scss"

import cx from "clsx"
import { GetServerSidePropsContext } from "next"

import { single } from "@/api/queries/contact"
import { FormContact } from "@/components/form-contact"
import { routes } from "@/constants"
import { DefaultLayout } from "@/layouts/default"
import { ContactData, FormType } from "@/types"

interface ContactProps {
  contactData: ContactData
}

export default function Contact(props: ContactProps) {
  const { contactData } = props
  return (
    <DefaultLayout seo={{ ...routes.contact.seo }}>
      <section className={cx(s.contact, "grid grid-cols-1 tablet:grid-cols-2")}>
        <div className={s.text}>
          <h5>Bizimle İletişime Geçin</h5>
          <div className={cx(s.items, "flex flex-col items-center tablet:items-start")}>
            <div className="flex flex-col">
              <h3>Telefon:</h3>
              <p>{contactData.phone}</p>
            </div>
            <div className="flex flex-col">
              <h3>Email:</h3>
              <p>{contactData.email}</p>
            </div>
            <div className="flex flex-col">
              <h3>Adres:</h3>
              <p>{contactData.address}</p>
            </div>
          </div>
        </div>
        <div className={s.formContactC}>
          <FormContact formType={FormType.contact} />
        </div>
      </section>
    </DefaultLayout>
  )
}

export async function getServerSideProps({ locale }: GetServerSidePropsContext) {
  const contactData = await single()

  return {
    props: {
      contactData,
      // locale,
      // messages: pick((await import(`@/messages/${locale}.json`)).default, About.messages),
    },
  }
}
