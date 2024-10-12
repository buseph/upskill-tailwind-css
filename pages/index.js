import Head from 'next/head'
import ProjectPreviewCard from '@components/ProjectPreviewCard'

export default function Home() {

  const projects = [
    {
      title: 'QR Code Component',
      tools: 'react-next-tailwind',
      link: '/qr-code',
      image: 'qr-code-preview.jpg'
    },
    {
      title: 'Result Summary Component',
      tools: 'react-next-tailwind',
      link: '/result-summary',
      image: 'result-summary-preview.jpg'
    },
    {
      title: 'Product Preview Card Component',
      tools: 'react-next-tailwind',
      link: '/product-preview-card',
      image: 'product-preview-card-preview.jpg'
    },
    {
      title: 'Interactive Rating Component',
      tools: 'react-next-tailwind-framer',
      link: '/interactive-rating',
      image: 'interactive-rating-preview.jpg'
    },
    {
      title: 'Croud Funding Landing Page',
      tools: 'react-next-tailwind-framer',
      link: '/crowd-funding',
      image: 'crowd-funding-preview.jpg'
    }
  ]

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
      <main className='flex items-center justify-center w-full h-full bg-slate-900'>
        <div className='grid w-full grid-cols-1 gap-4 py-40 px-5 place-items-center sm:grid-cols-2 md:grid-cols-3 max-w-[1000px]'>
          {projects.map((project, index) => (
            <ProjectPreviewCard key={index} title={project.title} tools={project.tools} link={project.link} image={project.image} />
          ))}
        </div>
      </main>
    </>
  )
}
