import Providers from "@/layouts/providers"
import { SmoothLayout } from "@/layouts/smooth"
import "@/styles/global.scss"
import "@/styles/globals.css"
import { Leva } from "leva"
import type { AppProps } from "next/app"

import { Dela_Gothic_One } from "next/font/google"

const delaGothicOne = Dela_Gothic_One({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-dela-gothic-one",
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`flex min-h-screen flex-col items-stretch justify-between ${delaGothicOne.variable}`}>
      <Providers>
        <SmoothLayout>
          <Component {...pageProps} />
        </SmoothLayout>
      </Providers>
      <div className="z-[9999999999999999999999999]">
        <Leva hidden />
      </div>
    </div>
  )
}
