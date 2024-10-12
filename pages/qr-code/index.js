import React from 'react'
import Image from 'next/image'
import qrCodePNG from '@public/qr-code/image-qr-code.png'
import { Quicksand } from 'next/font/google'
import HeadSEO from '@components/HeadSEO'
import Author from '@components/Author'
// import the text from the text.js file
import txt from './text'

const quicksand = Quicksand({ subsets: ['latin'] })

export default function Page() {
	return (
		<>
			<HeadSEO title="QR Code Component" image="qr-code" />
			<div className={quicksand.className + " flex flex-col items-center justify-center w-full h-screen font-outfit bg-[#d6e2f0]"}>
				<div className='shadow-2xl shadow-[#2d7cfa4c] flex flex-col items-center p-4 text-center bg-[#fff] w-[300px] rounded-2xl text-[#1f3251]'>
					<Image src={qrCodePNG} alt="Picture of the author" className='rounded-xl' />
					<h2 className='w-64 my-4 text-[22px] leading-tight font-bold'>
						{txt.HEADER_TEXT}
					</h2>
					<p className='mb-5 text-[15px] w-[250px] leading-tight text-[#7b879d]'>
						{txt.SUBHEADER_TEXT}
					</p>
				</div>
				<Author />
			</div>
		</>
	)
}