import React, { useState, useEffect } from 'react'
import { Overpass } from 'next/font/google'
import Image from 'next/image'
import { HashLoader } from 'react-spinners'
import { motion } from "framer-motion"
import Author from '@components/Author'
import HeadSEO from '@components/HeadSEO'

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
	const [loading, setLoading] = useState(false);
	const [feedback, setFeedback] = useState([]);

	const ratingNumber = [
		{ number: 1, bcontent: `before:content-['1']`, acontent: `after:content-['1']`, handleClick: () => handleClick(1) },
		{ number: 2, bcontent: `before:content-['2']`, acontent: `after:content-['2']`, handleClick: () => handleClick(2) },
		{ number: 3, bcontent: `before:content-['3']`, acontent: `after:content-['3']`, handleClick: () => handleClick(3) },
		{ number: 4, bcontent: `before:content-['4']`, acontent: `after:content-['4']`, handleClick: () => handleClick(4) },
		{ number: 5, bcontent: `before:content-['5']`, acontent: `after:content-['5']`, handleClick: () => handleClick(5) },
	]

	const ratingData = [
		{
			rating: 1,
			title: 'Needs Improvement',
			content: 'We apologize for falling short of your expectations. Please tell us how we can make things right.'
		},
		{
			rating: 2,
			title: 'Could Be Better',
			content: "Thank you for your feedback. We're always looking for ways to improve and your input is valuable to us."
		},
		{
			rating: 3,
			title: 'Just Right',
			content: "Thanks for taking the time to rate us. We're happy to hear that you had a satisfactory experience."
		},
		{
			rating: 4,
			title: 'Awesome Sauce!',
			content: "Wow, thank you for such a great rating! We're thrilled that you had an excellent experience and look forward to serving you again."
		},
		{
			rating: 5,
			title: 'Beyond Expectations!',
			content: "Thank you for your amazing feedback! We're honored to have exceeded your expectations and will continue to provide top-notch service."
		},
	]

	const handleClick = (number) => {
		setRating(number)
	}

	const handleSubmit = () => {
		if (rating === 0) {
			return alert('Please select a rating')
		}

		setSubmitted(true)
		setLoading(true)

		if (rating >= 1 && rating <= 5) {
			setFeedback(ratingData[rating - 1]);
		}

		// set timer to hide loading spinner
		setTimeout(() => {
			setLoading(false)
		}, 1000)
	}

	return (
		<>
			<HeadSEO title='Interactive Rating Component' image='interactive-rating' />
			<main className='bg-[#121417] w-screen h-screen flex justify-center items-center px-5 select-none'>
				<motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
					className={overpass.className + " flex items-center justify-center min-h-[355px] min-w-[340px] max-w-[340px] max-h-[355px] sm:min-h-[413.5px] sm:max-h-[413.5px] sm:min-w-[400px] sm:max-w-[400px] text-[#fff] bg-gradient-to-b from-[#252d37] to-[#161e29] p-7 sm:py-9 sm:px-[30px] rounded-2xl sm:rounded-3xl"}>
					{!submitted &&
						<motion.div>
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
						</motion.div>
					}

					<HashLoader color='#fb7413' loading={loading} size={50} />

					{submitted && !loading &&
						<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}
							className='flex flex-col items-center text-center'>
							<Image className='mt-2 w-36 sm:w-40' src='/interactive-rating/illustration-thank-you.svg' width={200} height={200} alt='Star icon' />
							<span className='text-[#fb7413] text-[14px] sm:text-[15px] bg-[#272e38] pt-2 pb-[6px] px-5 my-6 sm:my-8 rounded-full'>You selected {rating} out of 5</span>
							<h2 className='mb-3 text-2xl sm:text-[28px] font-semibold'>{feedback.title}</h2>
							<p className='text-[14px] sm:text-[15px] text-[#959eac]'>
								{feedback.content}
							</p>
						</motion.div>
					}
				</motion.div>
				<Author />
			</main>
		</>
	)
}
