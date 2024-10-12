import React, { useState } from 'react'
import { Roboto_Mono, Quicksand } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

const quicksand = Quicksand({ subsets: ['latin'] })
const robotoMono = Roboto_Mono({ subsets: ['latin'] })

export default function Author() {
	const [open, setOpen] = useState(false)

	const handleOpen = () => {
		setOpen(!open)

		// disable scroll
		if (open) {
			document.body.style.overflow = 'auto'
		} else {
			document.body.style.overflow = 'hidden'
		}
	}

	const currentYear = new Date().getFullYear()


	return (
		<>
			<div onClick={handleOpen} className={`${open ? 'hidden' : 'flex'} shadow-2xl fixed items-center justify-center align-middle rounded-full cursor-pointer animate-bounce hover:animate w-11 h-11 bg-slate-50 bottom-5 right-5`}>
				<span className={robotoMono.className + " text-2xl font-bold text-[#2e2e2e]"}>i</span>
			</div>
			<div className={`${open ? 'scale-100' : 'scale-0'} select-none transition-all duration-200 fixed left-0 top-0 w-screen h-full backdrop-blur-sm flex justify-center items-center `}>
				<div className={quicksand.className + ' bg-slate-50 w-80 pt-[40px] px-[40px] pb-5 rounded-xl shadow-xl relative'}>
					<svg onClick={handleOpen} className='absolute cursor-pointer w-7 right-4 top-4 text-slate-500' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
					</svg>
					<div className='flex flex-col items-center'>
						<hr className='w-[10rem]' />
						<p className='text-[#514c6a]'>
							Challenge by
						</p>
					</div>
					<hr />
					<Link href='https://www.frontendmentor.io' target="_blank" className='flex justify-center'>
						<Image className='py-5 ' src="/images/logo-desktop.svg" width={200} height={100} alt="Frontend Mentor Logo" />
					</Link>
					<div className='flex flex-col items-center mt-2'>
						<hr className='w-[6rem]' />
						<p className='text-[#514c6a]'>
							Developed by
						</p>
					</div>
					<hr />
					<Link href='https://github.com/buseph' target='_blank' className='flex items-center justify-center gap-3 py-5'>
						<Image className='rounded-full ' src="/images/me.png" width={40} height={40} alt="Picture of the author" />
						<h2 className='text-xl underline-offset-auto'>JSPH.dev</h2>
					</Link>
					<hr />
					<p className='mt-1 text-[10px] text-center text-[#acacac] tracking-widest'>© {currentYear} JOSEPH BARREDO</p>
				</div>
			</div>
		</>
	)
}
