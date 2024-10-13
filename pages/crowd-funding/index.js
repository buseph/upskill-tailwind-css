import React from "react";
import Image from "next/image";
import Author from "@components/Author";
import HeadSEO from "@components/HeadSEO";
import { Commissioner } from "next/font/google";
import txt from './text'

// Font
const commissioner = Commissioner({ subsets: ['latin'], })

export default function Index() {
	const [isBookmarked, setIsBookmarked] = React.useState(true);

	// Bookmark button handler
	const bookmarkHandler = () => {
		setIsBookmarked(!isBookmarked);
	}

	return (
		<>
			<HeadSEO title="Crowd Funding Landing Page" description="Crowd Funding Landing Page" image="crowd-funding-preview" />
			<main className={commissioner.className + " h-screen bg-[#fafafa]"}>
				{/* Navbar with Background Image */}
				<div className="relative h-[30rem] bg-[url('/crowd-funding/image-hero-desktop.jpg')] bg-center bg-cover max-w-[1920px] w-full mx-auto">
					{/* Navbar */}
					<header className="grid place-items-center">
						<nav className="flex items-center justify-between py-16 text-white max-w-[93rem] w-[90vw]">
							<div className="flex items-center space-x-4">
								<Image src="/crowd-funding/logo.svg" alt="Crowd Funding Logo" width={170} height={100} />
							</div>
							{/* Navbar Links */}
							<ul className="flex space-x-10 text-lg text-shadow-lg">
								{txt.NAVBAR_TEXTS.map((item, index) => (
									<li key={index}>
										<a href={item.link} className="select-none">{item.title}</a>
									</li>
								))}
							</ul>
						</nav>
					</header>
				</div>

				{/* Main Content */}
				<div className="grid place-items-center">
					{/* First Section */}
					<section className="absolute grid place-items-center w-[55vw] max-w-[66rem] min-w-[66rem] rounded-lg border-[#f5f5f5] bg-white border-2 select-none px-24 pb-16">
						<Image src="/crowd-funding/logo-mastercraft.svg" alt="Crowd Funding Master Craft Image" width={70} height={70} className="relative top-[-2.5rem]" />
						{/* First Section Title */}
						<h1 className="text-4xl font-bold">{txt.FIRST_SECTION.title}</h1>
						{/* First Section Description */}
						<p className="pt-5 text-xl font-light text-gray-400 pb-14">{txt.FIRST_SECTION.description}</p>
						<div className="flex justify-between w-full">
							{/* Back this project button */}
							<button className="bg-[#3cb4ab] hover:bg-[#147b74] transition-colors text-white py-6 px-14 rounded-full text-xl font-medium">{txt.FIRST_SECTION.button}</button>
							{/* Bookmark button */}
							<button onClick={bookmarkHandler} className={`py-6 px-14 rounded-full text-xl font-bold ml-5 relative bg-[#f4f4f4] ${isBookmarked ? "text-[#147b74]" : "text-[#767676] "}`}>
								<Image src={`/crowd-funding/icon-bookmark${isBookmarked ? 'ed' : ''}.svg`} alt="Bookmark Icon" width={76} height={76} className="absolute top-0 left-0" />
								<span className="pl-12">
									{isBookmarked ? txt.FIRST_SECTION.bookmarked : txt.FIRST_SECTION.bookmark}
								</span>
							</button>
						</div>
					</section>
				</div>
				<Author />
			</main>
		</>
	)
}