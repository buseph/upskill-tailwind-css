import Head from 'next/head'
import { Outfit } from 'next/font/google'
import Link from 'next/link'

const outfit = Outfit({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>jsph.dev | Tailwind Upskilling</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="jsph.dev | Tailwind Upskilling" />
        <meta name="og:description" content="jsph.dev | Tailwind Upskilling" />
        <meta name="twitter:description" content="jsph.dev | Tailwind Upskilling" />
        <meta property="og:image" content="/images/qr-code.png" />
      </Head>
      <main className='flex items-center justify-center w-full h-screen bg-slate-900'>
        <ul className={outfit.className + " text-2xl list-disc text-[#d4d4d4] marker:text-[#1020ac]"}>
          <li className='transition-all duration-200 hover:opacity-50'>
            <Link target='_blank' href='/qr-code'>QR Code Component</Link>
          </li>
          <li className='transition-all duration-200 hover:opacity-50'>
            <Link target='_blank' href='/result-summary'>Result Summary Component</Link>
          </li>
        </ul>
      </main>
    </>
  )
}
