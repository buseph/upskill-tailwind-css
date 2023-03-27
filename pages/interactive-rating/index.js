import React, { useState, useEffect } from 'react'
import { Overpass } from 'next/font/google'
import Image from 'next/image'

const overpass = Overpass({ subsets: ['latin'], })

const RatingNumber = ({ number, content, rating, setRating, handleClick }) => {
	const active = rating === number;
	const activeClass = active ? 'bg-[#7c8798]' : 'bg-[#272f39] before:hover:scale-100';

	return (
		<span onClick={handleClick} className={` ${content} ${activeClass} ` + `before:flex before:items-center before:justify-center before:rounded-full before:scale-0  before:transition before:ease-in before:duration-150 before:w-[40px] before:h-[40px] before:bg-[#fb7413] before:absolute cursor-pointer text-[#959eac] w-[40px] rounded-full h-[40px] flex items-center justify-center `}>{number}</span>
	)
}

export default function Index() {
	const [rating, setRating] = useState(0);


	const handleClick = (number) => {
		setRating(number)
	}

	return (
		<main className='bg-[#121417] w-screen h-screen flex justify-center items-center px-5'>
			<div className={overpass.className + " text-[#fff] bg-gradient-to-b from-[#252d37] to-[#161e29] p-7 rounded-2xl"}>
				<div className='w-10 h-10 bg-[#272f39] flex justify-center items-center rounded-full'>
					<Image className='w-[14px] h-[14px]' src='/interactive-rating/icon-star.svg' width={24} height={24} alt='Star icon' />
				</div>
				<h1 className='text-2xl font-semibold mb-3 mt-5'>How did we do?</h1>
				<p className='text-[14px] text-[#959eac]'>
					Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
				</p>
				<div className='flex justify-between text-sm mt-6'>
					{[1, 2, 3, 4, 5].map((number) => (
						<RatingNumber key={number} number={number} rating={rating} content={`before:content-['${number}']`} handleClick={() => handleClick(number)} />
					))}
				</div>
				<button className='hover:bg-[#fff] hover:text-[#fb7413] ease-in duration-150 w-full bg-[#fb7413] py-3 font-medium tracking-widest rounded-full mt-6'>SUBMIT</button>
			</div>
		</main>
	)
}
