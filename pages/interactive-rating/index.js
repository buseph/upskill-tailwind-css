import React, { useState, useEffect } from 'react'
import { Overpass } from 'next/font/google'
import Image from 'next/image'
import { HashLoader } from 'react-spinners'
import { motion, AnimatePresence, delay } from "framer-motion"

const overpass = Overpass({ subsets: ['latin'], })

const RatingNumber = ({ number, acontent, bcontent, rating, handleClick }) => {
	const active = rating === number;
	const activeClass = active ? `after:scale-100` : 'bg-[#272f39] before:hover:scale-100 after:scale-0';

	return (
		<span
			onClick={handleClick}
			className={
				` ${bcontent} ${activeClass} ` +
				`${acontent} after:flex after:items-center after:justify-center after:w-full after:h-full after:bg-[#7c8798] after:absolute after:text-[#fff] after:rounded-full after:transition after:ease-in after:duration-200 
				before:flex before:items-center before:justify-center before:rounded-full before:scale-0  before:transition before:ease-in before:duration-150 before:w-full before:h-full before:bg-[#fb7413] before:text-[#fff] before:absolute 
				cursor-pointer text-[#959eac] w-[40px] rounded-full h-[40px] sm:h-[50px] sm:w-[50px] flex items-center justify-center relative `
			}
		>
			{number}
		</span>
	);
}

export default function Index() {
	const [rating, setRating] = useState(0);
	const [submitted, setSubmitted] = useState(false);

	const ratingNumber = [
		{ number: 1, bcontent: `before:content-['1']`, acontent: `after:content-['1']`, handleClick: () => handleClick(1) },
		{ number: 2, bcontent: `before:content-['2']`, acontent: `after:content-['2']`, handleClick: () => handleClick(2) },
		{ number: 3, bcontent: `before:content-['3']`, acontent: `after:content-['3']`, handleClick: () => handleClick(3) },
		{ number: 4, bcontent: `before:content-['4']`, acontent: `after:content-['4']`, handleClick: () => handleClick(4) },
		{ number: 5, bcontent: `before:content-['5']`, acontent: `after:content-['5']`, handleClick: () => handleClick(5) },
	]

	const handleClick = (number) => {
		setRating(number)
	}

	const handleSubmit = () => {
		if (rating === 0) {
			return alert('Please select a rating')
		}

		setSubmitted(true)
	}

	return (
		<main className='bg-[#121417] w-screen h-screen flex justify-center items-center px-5 select-none'>
			<motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
				className={overpass.className + " max-w-[340px] sm:max-w-[400px] text-[#fff] bg-gradient-to-b from-[#252d37] to-[#161e29] p-7 sm:p-9 rounded-3xl"}>
				<div>
					<div className='w-10 h-10 sm:w-12 sm:h-12 bg-[#272f39] flex justify-center items-center rounded-full'>
						<Image className='w-[14px] h-[14px]' src='/interactive-rating/icon-star.svg' width={24} height={24} alt='Star icon' />
					</div>
					<h1 className='mt-5 sm:mt-8 mb-3 text-2xl font-semibold sm:text-[28px]'>How did we do?</h1>
					<p className='text-[14px] sm:text-[15px] text-[#959eac]'>
						Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
					</p>
					<div className='flex justify-between mt-6 text-sm'>
						{ratingNumber.map((item, index) => (
							<RatingNumber key={index} number={item.number} rating={rating} bcontent={item.bcontent} acontent={item.acontent} handleClick={item.handleClick} />
						))}
					</div>
					<button onClick={handleSubmit} className='hover:bg-[#fff] hover:text-[#fb7413] text-sm ease-in duration-150 w-full bg-[#fb7413] py-3 font-medium tracking-widest rounded-full mt-6 sm:mt-8'>SUBMIT</button>
					<div>
					</div>
				</div>
			</motion.div>
		</main>
	)
}
