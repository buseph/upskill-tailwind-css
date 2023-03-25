import React from 'react'
import { Montserrat, Fraunces } from 'next/font/google'
import Image from 'next/image'
import HeadSEO from '@components/HeadSEO'
import Author from '@components/Author'

const montserrat = Montserrat({ subsets: ['latin'] })
const fraunces = Fraunces({ subsets: ['latin'] })

export default function index() {

	return (
		<>
			<HeadSEO title="Product Preview Card Component" image="product-preview-card" />
			<main className='h-full sm:h-screen flex items-center justify-center bg-[#f2ebe3] select-none'>
				<div className='py-9 px-6 sm:flex max-w-[730px] drop-shadow-md'>
					<div className='overflow-hidden sm:basis-1/2 rounded-t-2xl sm:rounded-tr-none sm:rounded-bl-2xl '>
						<Image className='w-full sm:hidden' src="/product-preview-card/image-product-mobile.jpg" alt="product-preview-card" width={375} height={375} />
						<Image className='hidden w-full sm:block sm:h-full' src="/product-preview-card/image-product-desktop.jpg" alt="product-preview-card" width={375} height={375} />
					</div>

					<div className='sm:basis-1/2 bg-[#ffffff] p-7 sm:p-9 rounded-b-2xl sm:rounded-bl-none sm:rounded-tr-2xl'>
						<h2 className={montserrat.className + " text-[#6c7289] text-sm tracking-[8px] sm:tracking-[5px]"}>PERFUME</h2>
						<h1 className={fraunces.className + " text-[#1c232b] text-[40px] sm:text-[35px] leading-none font-bold mt-3 mb-4 sm:mt-6 sm:mb-6"}>Gabrielle Essence Eau <br className="hidden sm:block" /> De Parfum</h1>
						<p className={montserrat.className + " text-[#6c7289] text-lg sm:text-base"}>A floral, solar and voluptuous interpretation composed by Olivier Polge,
							Perfumer-Creator for the House of CHANEL.
						</p>
						<div className='mt-5 mb-3 sm:mb-7 sm:mt-7'>
							<span className={fraunces.className + " text-[#3c8067] text-[40px] sm:text-[37px] font-bold inline-block align-middle mr-5"}>$149.99</span>
							<span className={montserrat.className + " text-[#6c7289] line-through inline-block align-middle"}>$169.99</span>
						</div>
						<button className='bg-[#3c8067] w-full flex justify-center py-4 rounded-xl sm:rounded-lg gap-3 hover:bg-[#245644] transition-all'>
							<Image className='relative top-1 sm:top-[2px]' src="/product-preview-card/icon-cart.svg" alt="icon-cart" width={18} height={18} />
							<span className={montserrat.className + " text-[#ffffff] text-lg font-semibold sm:text-base"}>Add to Cart</span>
						</button>
					</div>
				</div>
				<Author />
			</main>
		</>
	)
}
