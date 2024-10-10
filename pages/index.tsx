import s from "./home/home.module.scss"

import cx from "clsx"
import dynamic from "next/dynamic"

import { Marquee } from "@/components/animations/marquee"
import { FormContact } from "@/components/form-contact"
import { IconBgStar, IconOk, IconOwraLogo, IconStar } from "@/components/icons"
import { SliderFade } from "@/components/slider-fade"
import { SliderProducts } from "@/components/slider-products"
import { Img } from "@/components/utility/img"
import { DefaultLayout } from "@/layouts/default"

const ParallaxWrapper = dynamic(() => import("@/components/animations/parallax"), {
  ssr: false,
})

const FloatWrapper = dynamic(() => import("@/components/animations/float"), {
  ssr: false,
})

import i1 from "@/public/img/b-1.png"
import i2 from "@/public/img/b-2.png"
import i3 from "@/public/img/b-3.png"
import i4 from "@/public/img/b-4.png"
import ice1 from "@/public/img/ice-1.png"
import ice2 from "@/public/img/ice-2.png"
import iceCubes from "@/public/img/ice-cubes.png"
import s1 from "@/public/img/s-1.svg"

export default function Home() {
  return (
    <DefaultLayout seo={{ title: "title", description: "description" }}>
      <section className={cx(s.intro, "flex items-center justify-center")}>
        <div className={s.logoC}>
          <IconOwraLogo />
        </div>

        <div className={s.cupC}>
          <FloatWrapper>
            <Img className="object-contain rotate-6" src="/img/cup.png" alt="Ice Cup" height={1000} width={1000} />
          </FloatWrapper>
        </div>

        <div className={s.iceC}>
          <Img src={iceCubes} alt="Ice Cubes" />
        </div>

        <div className={cx(s.ice, s.ice1)}>
          <ParallaxWrapper speedY={-1}>
            <Img alt="Ice Cube" className="object-contain rotate-6" src={i3} />
          </ParallaxWrapper>
        </div>

        <div className={cx(s.ice, s.ice2)}>
          <ParallaxWrapper speedY={-1}>
            <Img alt="Ice Cube" className="object-contain -rotate-6" src={i1} />
          </ParallaxWrapper>
        </div>

        <div className={cx(s.ice, s.ice3)}>
          <ParallaxWrapper speedY={-1}>
            <Img alt="Ice Cube" className="object-contain -rotate-12" src={i1} />
          </ParallaxWrapper>
        </div>

        <div className={cx(s.ice, s.ice4)}>
          <ParallaxWrapper speedY={-1}>
            <Img alt="Ice Cube" className="object-contain rotate-6" src={i2} />
          </ParallaxWrapper>
        </div>

        <div className={cx(s.ice, s.ice5)}>
          <ParallaxWrapper speedY={-1}>
            <Img alt="Ice Cube" className="object-contain rotate-6" src={i4} />
          </ParallaxWrapper>
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
          <Img className="object-cover" src={"/img/sample.jpg"} alt="Sample" width={2000} height={2000} />
        </div>

        <div className={s.waveC}>
          <Img src={s1} alt="Ice Cubes" />
        </div>

        <div className={cx(s.iceC, s.ice1)}>
          <ParallaxWrapper speedY={-0.9}>
            <Img className="object-contain" src={ice1} alt="Ice Cube" />
          </ParallaxWrapper>
        </div>

        <div className={cx(s.iceC, s.ice2)}>
          <ParallaxWrapper speedY={-0.6}>
            <Img className="object-contain" src={ice2} alt="Ice Cube" />
          </ParallaxWrapper>
        </div>
      </section>

      <section className="w-screen h-screen flex items-center justify-center">
        <SliderProducts />
      </section>

      <section className={s.why}>
        <div className={s.marqueeC}>
          <Marquee repeat={5}>
            <div className="flex items-center">
              <h2>Neden Owra?</h2>
              <span className={s.iconC}>
                <IconStar fill="var(--algerian-colar)" />
              </span>
            </div>
          </Marquee>
        </div>

        <div className="grid grid-cols-12">
          <div className={cx(s.imgs, "col-span-7")}>
            <div className={cx(s.imgC, s.img1)}>
              <Img className="object-cover" src={"/img/sample.jpg"} alt="Sample" width={2000} height={2000} />
            </div>

            <div className={cx(s.iconC, s.icon1)}>
              <ParallaxWrapper speedY={-1}>
                <IconStar fill="var(--algerian-colar)" />
              </ParallaxWrapper>
            </div>

            <div className={cx(s.iconC, s.icon2)}>
              <ParallaxWrapper speedY={-2}>
                <IconStar fill="var(--algerian-colar)" />
              </ParallaxWrapper>
            </div>
          </div>

          <div className={cx(s.text, "flex flex-col items-center justify-center col-span-5")}>
            <p>
              Owra ile kaliteyi ve eğlenceyi bir arada yaşayın. Hayatınıza biraz daha keyif ve neşe katmak için
              buradayız.
            </p>
            <ul>
              <li>
                <h5>
                  <span className={s.iconC}>
                    <IconOk />
                  </span>
                  Tazelik ve Lezzet
                </h5>
                <p>Ürünlerimiz her zaman taze ve lezzet doludur.</p>
              </li>
              <li>
                <h5>
                  <span className={s.iconC}>
                    <IconOk />
                  </span>
                  Güvenilirlik
                </h5>
                <p>Kalitemize ve hizmetimize güvenebilirsiniz.</p>
              </li>
              <li>
                <h5>
                  <span className={s.iconC}>
                    <IconOk />
                  </span>
                  Eğlenceli Deneyimler
                </h5>
                <p>Her anınıza neşe katmayı amaçlıyoruz.</p>
              </li>
              <li>
                <h5>
                  <span className={s.iconC}>
                    <IconOk />
                  </span>
                  Müşteri Memnuniyeti
                </h5>
                <p>Sizin memnuniyetiniz bizim için en büyük ödüldür.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={s.slider}>
        <div className={cx(s.sliderC, "flex items-center justify-center")}>
          <div className={s.bg}>
            <IconBgStar />
          </div>
          <SliderFade autoplay buttonStyles={s.button}>
            <div className="flex flex-col items-center">
              <h3 className={s.title}>Owra ile Kalite</h3>
              <p className={s.description}>
                Owra olarak, her ürünümüzde kaliteyi ön planda tutuyoruz. Ürünlerimizin her bir aşamasında titizlikle
                çalışarak, en yüksek kalite standartlarını sağlıyoruz. Kullandığımız malzemelerden üretim sürecine kadar
                her detayda kaliteyi hissetmeniz için çalışıyoruz. Çünkü sizin memnuniyetiniz, bizim önceliğimiz.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className={s.title}>Owra ile Eğlence</h3>
              <p className={s.description}>
                Owra, sadece bir marka değil, aynı zamanda eğlenceli anların yaratıcısıdır. Ürünlerimizle, günlük
                rutininize biraz daha neşe ve keyif katmayı amaçlıyoruz. İster bir arkadaş buluşmasında, ister bir aile
                etkinliğinde, Owra ürünleri her anınıza renk katacak. Her yudumda eğlenceyi ve mutluluğu hissetmeniz
                için buradayız.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className={s.title}>Owra’nın Farkı</h3>
              <p className={s.description}>
                Owra, kalite ve eğlenceyi bir arada sunarak fark yaratır. Bizim için her anın özel ve değerli olduğunu
                biliyoruz. Bu yüzden, size en iyi ürünleri sunarken, aynı zamanda eğlenceli deneyimler yaşatmayı
                hedefliyoruz. Owra ürünleriyle, her anınızı unutulmaz kılın. 
              </p>
            </div>
          </SliderFade>
        </div>

        <div className={cx(s.ice, s.ice1)}>
          <FloatWrapper amountY={[-20, 20]}>
            <Img alt="Ice Cube" className="object-contain" src={i3} />
          </FloatWrapper>
        </div>

        <div className={cx(s.ice, s.ice2)}>
          <FloatWrapper amountY={[-20, 20]}>
            <Img alt="Ice Cube" className="object-contain" src={i1} />
          </FloatWrapper>
        </div>

        <div className={cx(s.ice, s.ice3)}>
          <FloatWrapper amountY={[-20, 20]}>
            <Img alt="Ice Cube" className="object-contain" src={i1} />
          </FloatWrapper>
        </div>

        <div className={cx(s.ice, s.ice4)}>
          <FloatWrapper amountY={[-20, 20]}>
            <Img alt="Ice Cube" className="object-contain" src={i2} />
          </FloatWrapper>
        </div>

        <div className={cx(s.ice, s.ice5)}>
          <FloatWrapper amountY={[-20, 20]}>
            <Img alt="Ice Cube" className="object-contain" src={i4} />
          </FloatWrapper>
        </div>
      </section>

      <section className={cx(s.contact, "grid grid-cols-12")}>
        <div className={cx(s.formC, "col-span-6")}>
          <h2>Herhangi Bir Sorunuz mu Var? Yardımcı Olmaktan Mutluluk Duyarız!</h2>
          <FormContact theme="white" />
        </div>
        <div className="col-span-6">
          <div className={s.imgC}>
            <Img className="object-cover" src={"/img/sample.jpg"} alt="Sample" width={2000} height={2000} />
          </div>
        </div>
        {/* <div className={s.waveC}>
          <Img src={s2} alt="Ice Cubes" />
        </div> */}
      </section>
    </DefaultLayout>
  )
}
