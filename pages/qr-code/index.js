import Image from 'next/image'
import qrCodePNG from '@public/qr-code/image-qr-code.png'
import { Outfit } from 'next/font/google'
import Head from 'next/head'

const outfit = Outfit({ subsets: ['latin'] })

export default function Page() {
	return (
		<>
			<Head>
				<title>QR Code</title>
				<link rel="icon" href="/favicon.ico" />
				<link rel="icon" href="/qr-code/favicon.ico" />
			</Head>
			<div className={outfit.className + " flex flex-col items-center justify-center w-full h-screen font-outfit bg-qrColor1"}>
				<div className='drop-shadow-2xl flex flex-col items-center p-4 text-center bg-white w-[300px] rounded-2xl text-qrColor3'>
					<Image
						src={qrCodePNG}
						alt="Picture of the author"
						className='rounded-xl'
					/>
					<h2 className='w-64 my-4 text-[22px] leading-tight font-bold'>
						Improve your front-end skills by building projects
					</h2>
					<p className='mb-5 text-[15px] w-[250px] leading-tight text-qrColor2'>
						Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
					</p>
				</div>
				<p className='text-xs sm:text-sm mt-10 text-[#b8b5dc] [&>*]:text-[#2d7dfa] [&>*]:opacity-70 text-center'>Challenge provided by <a title='This is an awesome website!' target="_blank" className='hover:font-semibold hover:opacity-100' href='https://www.frontendmentor.io'>Frontend Mentor</a>. Site coded by <a title='Wanna see my work? Click here!' target="_blank" className='hover:font-semibold hover:opacity-100' href='https://github.com/buseph'>jsph.dev</a>.</p>
			</div>
		</>
	)
}