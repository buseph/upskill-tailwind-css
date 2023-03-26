import Head from 'next/head'
import { Outfit } from 'next/font/google'
import ProjectPreviewCard from '@components/ProjectPreviewCard'

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
      <main className='flex items-center justify-center w-full h-full py-20 md:h-screen bg-slate-900'>
        <div className='grid w-full grid-cols-1 gap-4 px-5 place-items-center sm:grid-cols-2 md:grid-cols-3 max-w-[1000px]'>
          <ProjectPreviewCard title="QR Code Component" tools="react-next-tailwind" link="/qr-code" image="qr-code-preview.jpg" />
          <ProjectPreviewCard title="Result Summary Component" tools="react-next-tailwind" link="/result-summary" image="result-summary-preview.jpg" />
          <ProjectPreviewCard title="Product Preview Card Component" tools="react-next-tailwind" link="/product-preview-card" image="product-preview-card-preview.jpg" />
        </div>
      </main>
    </>
  )
}
