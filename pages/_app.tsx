import { Modal } from "@/components/utility/modal"
import { SmoothLayout } from "@/layouts/smooth"
import "@/styles/global.scss"
import "@/styles/globals.css"
import type { AppProps } from "next/app"

import { NextIntlClientProvider } from "next-intl"
import { Dela_Gothic_One } from "next/font/google"
import { useRouter } from "next/router"
import { QueryClient, QueryClientProvider } from "react-query"

const delaGothicOne = Dela_Gothic_One({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-dela-gothic-one",
})

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  // useReloadOnResize()
  return (
    <div className={`flex min-h-screen flex-col items-stretch justify-between ${delaGothicOne.variable}`}>
      <QueryClientProvider client={queryClient}>
        <NextIntlClientProvider locale={router.locale} timeZone="Europe/Istanbul" messages={pageProps.messages}>
          <SmoothLayout>
            <Component {...pageProps} />
          </SmoothLayout>
        </NextIntlClientProvider>
      </QueryClientProvider>
      <Modal />
    </div>
  )
}
