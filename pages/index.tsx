import s from "./home/home.module.scss"

import cx from "clsx"

import { DefaultLayout } from "@/layouts/default"
import { IconOwraLogo, IconStar } from "@/components/icons"
import { Img } from "@/components/utility/img"

import iceCubes from "@/public/img/ice-cubes.png"
import s1 from "@/public/img/s-1.svg"
import { Marquee } from "@/components/animations/marquee"

export default function Home() {
  return (
    <DefaultLayout seo={{ title: "title", description: "description" }}>
      <section className={cx(s.intro, "flex items-center justify-center")}>
        <div className={s.logoC}>
          <IconOwraLogo />
        </div>

        <div className={s.iceC}>
          <Img src={iceCubes} alt="Ice Cubes" />
        </div>
      </section>
      <section className={cx(s.greetings, "flex flex-col items-center")}>
        <div className={s.text}>
          <h1>
            <span>Kalite</span>
            <span>ve Eğlencenin</span>
            <span>Buluşma</span>
            <span>Noktası!</span>
          </h1>

          <p>
            Owra olarak, hayatınıza kalite ve eğlence katmak için buradayız. İster serinletici bir buz, ister taze
            sıkılmış meyve suları, isterse de kahvenin eşsiz aroması olsun; her bir ürünümüzle size en iyi deneyimi
            sunmayı hedefliyoruz.
          </p>
        </div>

        <div className={cx(s.fullImg, "h-screen")}>
          <Img src={"/img/sample.jpg"} alt="Sample" width={2000} height={2000} />

          <div className={s.waveC}>
            <Img src={s1} alt="Ice Cubes" />
          </div>
        </div>
      </section>
      <section className="w-screen h-screen flex items-center justify-center">SLIDER</section>
      <section className={s.why}>
        <div className={s.marqueeC}>
          <Marquee repeat={5}>
            <div className="flex items-center">
              <h2>Neden Owra?</h2>
              <span className={s.iconC}>
                <IconStar />
              </span>
            </div>
          </Marquee>
        </div>
        <div className="grid grid-cols-12">
          <div className={cx(s.imgs, "col-span-7")}>
            <div className={s.imgC}>
              <Img className="object-cover" src={"/img/sample.jpg"} alt="Sample" width={2000} height={2000} />
            </div>
            <div className={s.imgC}>
              <Img className="object-cover" src={"/img/sample.jpg"} alt="Sample" width={2000} height={2000} />
            </div>
          </div>

          <div className={cx(s.text, "flex flex-col items-center justify-center col-span-5")}>
            <p>
              Owra ile kaliteyi ve eğlenceyi bir arada yaşayın. Hayatınıza biraz daha keyif ve neşe katmak için
              buradayız.
            </p>
            <ul>
              <li>
                <h5>Tazelik ve Lezzet</h5>
                <p>Ürünlerimiz her zaman taze ve lezzet doludur.</p>
              </li>
              <li>
                <h5>Güvenilirlik</h5>
                <p>Kalitemize ve hizmetimize güvenebilirsiniz.</p>
              </li>
              <li>
                <h5>Eğlenceli Deneyimler</h5>
                <p>Her anınıza neşe katmayı amaçlıyoruz.</p>
              </li>
              <li>
                <h5>Müşteri Memnuniyeti</h5>
                <p>Sizin memnuniyetiniz bizim için en büyük ödüldür.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="w-screen h-screen flex items-center justify-center">SLIDER</section>
    </DefaultLayout>
  )
}
