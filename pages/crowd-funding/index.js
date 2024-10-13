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
			<main className={commissioner.className}>
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
				<Author />
			</main>
		</>
	)
}