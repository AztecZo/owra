import useReloadOnResize from "@/hooks/use-reload-on-resize"
import Providers from "@/layouts/providers"
import { SmoothLayout } from "@/layouts/smooth"
import "@/styles/global.scss"
import "@/styles/globals.css"
import type { AppProps } from "next/app"

import { Dela_Gothic_One } from "next/font/google"
import { QueryClient, QueryClientProvider } from "react-query"

const delaGothicOne = Dela_Gothic_One({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-dela-gothic-one",
})

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  useReloadOnResize()
  return (
    <div className={`flex min-h-screen flex-col items-stretch justify-between ${delaGothicOne.variable}`}>
      <QueryClientProvider client={queryClient}>
        <Providers>
          <SmoothLayout>
            <Component {...pageProps} />
          </SmoothLayout>
        </Providers>
      </QueryClientProvider>
    </div>
  )
}
