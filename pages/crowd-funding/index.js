import React from "react";
import Image from "next/image";
import Author from "@components/Author";
import HeadSEO from "@components/HeadSEO";
import { Commissioner } from "next/font/google";
import txt from './text'

const commissioner = Commissioner({ subsets: ['latin'], })

export default function Index() {

	return (
		<>
			<HeadSEO title="Crowd Funding Landing Page" description="Crowd Funding Landing Page" image="crowd-funding-preview" />
			<main className={commissioner.className + " h-screen bg-[#fafafa]"}>
				{/* Navbar with Background Image */}
				<div className="relative h-[30rem] bg-[url('/crowd-funding/image-hero-desktop.jpg')] bg-center bg-cover">
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
					<section className="absolute grid place-items-center w-[55vw] max-w-[66rem] rounded-lg border-[#f5f5f5] bg-white border-2 select-none">
						<Image src="/crowd-funding/logo-mastercraft.svg" alt="Crowd Funding Master Craft Image" width={70} height={70} className="relative top-[-2.5rem]" />
						<h1 className="text-4xl font-bold">{txt.FIRST_SECTION.title}</h1>
						<p className="pt-5 text-xl font-light text-gray-400 pb-14">{txt.FIRST_SECTION.description}</p>
					</section>
				</div>
				<Author />
			</main>
		</>
	)
}