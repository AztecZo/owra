import s from "./franchise.module.scss"

import cx from "clsx"

import { DefaultLayout } from "@/layouts/default"
import { Marquee } from "@/components/animations/marquee"
import { Img } from "@/components/utility/img"
import { FormContact } from "@/components/form-contact"

export interface FranchiseProps {}

export default function Franchise(props: FranchiseProps) {
  return (
    <DefaultLayout seo={{ title: "Franchise", description: "Franchise" }}>
      <section className={cx(s.intro, "flex flex-col items-center")}>
        <h1>Owra Ailesine Katılın!</h1>
        <p>
          Owra olarak, büyüyen ailemize yeni iş ortakları arıyoruz! Owra Franchise fırsatları ile kendi işinizi kurarak
          başarılı bir girişimci olabilirsiniz. Kalite, tazelik ve eğlence odaklı ürünlerimizle müşterilerimize en iyi
          hizmeti sunmak için birlikte çalışmak istiyoruz.
        </p>
        <button>Franchise Ol</button>
      </section>

      <section className={s.marqueeC}>
        <Marquee repeat={5}>
          <div className={cx(s.imgs, "flex items-center")}>
            <div className={s.imgC}>
              <Img className="object-cover" src={"/img/sample.jpg"} alt="Sample" width={2000} height={2000} />
            </div>
            <div className={s.imgC}>
              <Img className="object-cover" src={"/img/sample.jpg"} alt="Sample" width={2000} height={2000} />
            </div>
          </div>
        </Marquee>
      </section>

      <section className={cx(s.why, "flex flex-col items-center flex-wrap")}>
        <h2>Bizimle Neden Franchise Yapmalısınız?</h2>
        <div className={cx(s.items, "flex flex-wrap items-start justify-center")}>
          <div className="flex flex-col items-center justify-start">
            <h3>Marka Gücü</h3>
            <p>Owra, kalite ve eğlenceyi bir araya getiren güçlü bir markadır.</p>
          </div>
          <div className="flex flex-col items-center justify-start">
            <h3>Destek</h3>
            <p>Franchise sahiplerimize kapsamlı eğitim ve operasyonel destek sağlarız.</p>
          </div>
          <div className="flex flex-col items-center justify-start">
            <h3>Ürün Çeşitliliği</h3>
            <p>Buz, meyve suları, kahve ve diğer içeceklerimizle geniş bir ürün yelpazesi sunarız.</p>
          </div>
          <div className="flex flex-col items-center justify-start">
            <h3>Pazarlama Desteği</h3>
            <p>Ulusal pazarlama kampanyaları ve yerel reklam stratejileri ile destek veririz.</p>
          </div>
          <div className="flex flex-col items-center justify-start">
            <h3>İnovasyon</h3>
            <p>Sürekli olarak ürün geliştirme ve yenilik yapma fırsatı sunarız.</p>
          </div>
        </div>
      </section>
      <section className={cx(s.pros, "grid grid-cols-2")}>
        <div>
          <div className={s.imgC}>
            <Img className="object-cover" src={"/img/sample.jpg"} alt="Sample" width={2000} height={2000} />
          </div>
        </div>
        <div className={cx(s.text, "flex flex-col")}>
          <h2>Owra Franchise Sahibi Olmanın Avantajları</h2>
          <div className={cx(s.items, "flex flex-col")}>
            <div className="flex flex-col items-center justify-start">
              <h3>Kuruluş ve Operasyonel Rehberlik</h3>
              <p>İşinizi başlatırken ve işletirken size rehberlik ediyoruz.</p>
            </div>
            <div className="flex flex-col">
              <h3>Ürün Tedarik</h3>
              <p>Kaliteli malzemelerle ürün tedarikini sağlıyoruz.</p>
            </div>
            <div className="flex flex-col">
              <h3>Marka Tanınırlığı</h3>
              <p>Owra&apos;nın güçlü marka imajından yararlanırsınız.</p>
            </div>
            <div className="flex flex-col">
              <h3>Karlılık</h3>
              <p>Karlı bir iş modeli ve rekabetçi getiri sağlar.</p>
            </div>
          </div>
        </div>
      </section>
      <section className={cx(s.contact, "grid grid-cols-2")}>
        <div className={s.text}>
          <h5>Nasıl Başvurabilirim?</h5>
          <p>
            Owra Franchise başvuru süreci hakkında daha fazla bilgi almak ve başvuru yapmak için bize ulaşın. Ekibimiz,
            sizinle birlikte çalışarak size uygun olan franchise seçeneklerini tartışacaktır. Başvuru formu doldurabilir
            veya detaylı bilgi almak için bize ulaşabilirsiniz.
          </p>
          <div className={cx(s.items, "flex flex-col ")}>
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
