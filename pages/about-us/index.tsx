import s from "./about-us.module.scss"

import cx from "clsx"
import { useRouter } from "next/router"

import { Marquee } from "@/components/animations/marquee"
import { Button } from "@/components/button"
import { IconMask, IconStar } from "@/components/icons"
import { Img } from "@/components/utility/img"
import { Link } from "@/components/utility/link"
import { DefaultLayout } from "@/layouts/default"

export interface AboutUsProps {}

export default function AboutUs(props: AboutUsProps) {
  const router = useRouter()

  return (
    <DefaultLayout seo={{ title: "About Us", description: "About Us" }}>
      <div className={cx(s.intro, "grid grid-cols-1 tablet:grid-cols-2")}>
        <div className={s.imgC}>
          <div className={s.mask}>
            <IconMask />
          </div>
          <Img className="object-cover" src={"/img/sample.jpg"} alt="Sample" width={2000} height={2000} />
        </div>

        <div className={s.text}>
          <h1>
            <span>Owra’nın</span>
            <span>Hikayesi</span>
          </h1>
          <p>
            Owra, kaliteyi ve eğlenceyi yaşamınıza getirmek amacıyla kuruldu. Her şey, en sevdiklerimize taptaze ve
            kaliteli ürünler sunma arzumuzla başladı. Bugün, buzdan meyve sularına, kahveden diğer içeceklere kadar
            geniş bir ürün yelpazesi ile hizmet veriyoruz.
          </p>
        </div>
      </div>

      <section className={s.marqueeC}>
        <Marquee repeat={5}>
          <div className="flex items-center">
            <h2>Kalitenin eğlence ile buluşması</h2>
            <span className={s.iconC}>
              <IconStar fill="var(--science-blue)" />
            </span>
          </div>
        </Marquee>
      </section>

      <section className={cx(s.purpose, "grid grid-cols-1 tablet:grid-cols-2")}>
        <div className="flex flex-col items-center">
          <h2>Misyonumuz</h2>
          <p>
            Owra olarak, her yudumda kaliteyi ve keyfi sunmayı hedefliyoruz. Ürünlerimizi titizlikle seçiyor, en taze
            malzemelerle hazırlıyor ve sizlere sunuyoruz. Müşteri memnuniyeti ve sağlıklı yaşam tarzını teşvik etmek
            bizim en büyük önceliğimizdir.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <h2>Vizyonumuz</h2>
          <p>
            Türkiye&apos;nin dört bir yanında kalite ve eğlencenin buluştuğu anların bir parçası olmak. Owra&apos;nın
            adı anıldığında, akıllara gelen ilk şeyin güven ve lezzet olması için çalışıyoruz.
          </p>
        </div>
      </section>

      <section className={s.pros}>
        <div className={s.imgC}>
          <Img className="object-cover" src={"/img/sample.jpg"} alt="Sample" width={2000} height={2000} />
        </div>
        <div className={cx(s.items, "grid grid-cols-1 tablet:grid-cols-4")}>
          <div className="flex flex-col items-center justify-start">
            <span className={s.iconC}>
              <IconStar fill="var(--science-blue)" />
            </span>
            <h3>Kalite</h3>
            <p>Ürünlerimizde en yüksek kalite standartlarını sağlıyoruz.</p>
          </div>
          <div className="flex flex-col items-center justify-start">
            <span className={s.iconC}>
              <IconStar fill="var(--science-blue)" />
            </span>
            <h3>Eğlence</h3>
            <p>Hayatınıza biraz daha neşe katmak için buradayız.</p>
          </div>
          <div className="flex flex-col items-center justify-start">
            <span className={s.iconC}>
              <IconStar fill="var(--science-blue)" />
            </span>
            <h3>Güven</h3>
            <p>Müşterilerimizin bize olan güvenini her zaman koruyoruz.</p>
          </div>
          <div className="flex flex-col items-center justify-start">
            <span className={s.iconC}>
              <IconStar fill="var(--science-blue)" />
            </span>
            <h3>Yenilik</h3>
            <p>Sürekli olarak kendimizi yeniliyor ve geliştiriyoruz.</p>
          </div>
        </div>
      </section>

      <section className={cx(s.franchise, "flex flex-col items-center")}>
        <p>
          Owra, sıradan bir marka olmanın ötesinde, bir yaşam tarzıdır. Bizimle birlikte, her anınızı daha keyifli ve
          özel kılmak için buradayız. Bize katılın ve Owra ile hayatınıza biraz daha neşe katın.
        </p>
        <Link className={s.cta} href="/franchise">
          <Button>Franchise Ol</Button>
        </Link>
      </section>

      <section className={cx(s.career, "flex flex-col-reverse tablet:grid grid-cols-1 tablet:grid-cols-2 gap-10")}>
        <div className={cx(s.text, "flex flex-col items-center justify-center")}>
          <p>
            Owra, sıradan bir marka olmanın ötesinde, bir yaşam tarzıdır. Bizimle birlikte, her anınızı daha keyifli ve
            özel kılmak için buradayız. Bize katılın ve Owra ile hayatınıza biraz daha neşe katın.
          </p>
          <Link className={s.cta} href="/franchise">
            <Button theme="white">Kariyer</Button>
          </Link>
        </div>
        <div>
          <div className={s.imgC}>
            <Img className="object-cover" src={"/img/sample.jpg"} alt="Sample" width={2000} height={2000} />
          </div>
        </div>
      </section>
    </DefaultLayout>
  )
}
