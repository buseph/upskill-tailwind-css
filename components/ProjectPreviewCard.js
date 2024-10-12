import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Quicksand } from 'next/font/google'
import Link from 'next/link'

const quicksand = Quicksand({ subsets: ['latin'] })

export default function ProjectPreviewCard({ title, tools, link, image }) {
	const [projectTools, setTools] = useState([]);

	useEffect(() => {
		const toolsArray = tools.split('-')
		// convert all letters to uppercase
		const capitalizedTools = toolsArray.map(tool => tool.toUpperCase())
		setTools(capitalizedTools)
	}, [tools])

	const toolsColor = [
		'text-blue-400',
		'text-violet-700',
		'text-pink-500',
		'text-green-400',
	]


	return (
		<div className='rounded-xl  overflow-hidden relative border-[1px] border-[#5899ef86] select-none h-full w-full max-w-[400px] shadow-lg shadow-[#26386286]'>
			<div className='overflow-hidden after:pointer-events-none after:w-full after:h-[6rem] after:bg-gradient-to-b after:from-[#00000078] after:to-[#00000002]  after:absolute after:left-0 after:top-0'>
				<Link target='_blank' href={link}>
					<Image className='w-full transition-all duration-200 cursor-pointer hover:scale-110' src={`/images/${image}`} alt='' width={200} height={200} />
				</Link>
			</div>
			<div className={quicksand.className + " bg-white p-3 h-full"}>
				<h3 className='text-base leading-tight sm:text-lg sm:leading-tight font-base text-slate-800'>{title}</h3>
				<hr className='my-2' />
				<div className='[&>*]:font-bold [&>*]:text-xs [&>*]:sm:text-base flex space-x-2 flex-wrap '>
					{
						projectTools.map((tool, index) => {
							return (
								<h3 key={index} className={toolsColor[index]}>{tool}</h3>
							)
						})
					}
				</div>
			</div>
		</div>
	)
}
