import '@/styles/globals.css'
import { Lobster, Roboto } from '@next/font/google'
import type { AppProps } from 'next/app'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-roboto'
})

const lobster = Lobster({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-lobster'

})
export default function App({ Component, pageProps }: AppProps) {
  return <main className={`${lobster.variable} ${roboto.variable}`}>
    <Component {...pageProps} />
  </main>
}
