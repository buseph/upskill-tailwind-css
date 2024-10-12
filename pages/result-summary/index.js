import React from "react";
import { Quicksand } from "next/font/google";
import Image from "next/image";
import HeadSEO from "@components/HeadSEO";
import Author from "@components/Author";

const quicksand = Quicksand({ subsets: ["latin"] });

const data = [
	{
		category: "Reaction",
		score: 80,
		icon: "icon-reaction.svg",
		bg: "bg-[#ff575710]",
		color: "text-[#ff5757]",
		alt: "icon-reaction",
	},
	{
		category: "Memory",
		score: 92,
		icon: "icon-memory.svg",
		bg: "bg-[#ffb01f10]",
		color: "text-[#ffb01f]",
		alt: "icon-memory",
	},
	{
		category: "Verbal",
		score: 61,
		icon: "icon-verbal.svg",
		bg: "bg-[#00bd9110]",
		color: "text-[#00bd91]",
		alt: "icon-verbal",
	},
	{
		category: "Visual",
		score: 72,
		icon: "icon-visual.svg",
		bg: "bg-[#1125d410]",
		color: "text-[#1125d4]",
		alt: "icon-visual",
	},
];

export default function Page() {
	return (<>
		<HeadSEO title="Result Summary Component" image="result-summary" />
		<main className={quicksand.className + " w-screen h-full sm:h-screen sm:flex sm:flex-col sm:justify-center sm:items-center select-none"}>
			<div className="flex flex-col sm:flex-row [&>*]:sm:basis-1/2 sm:shadow-2xl sm:shadow-[#1172d433] sm:rounded-3xl sm:w-full sm:max-w-[650px]">
				<div className="pt-5 pb-9 sm:py-10 gap-6 sm:gap-8 flex flex-col items-center bg-gradient-to-b from-[#7857ff] to-[#2e2be9] rounded-b-3xl sm:rounded-3xl">
					<h2 className="text-[#c8c7ff] font-medium text-base sm:text-xl">Your Result</h2>
					<div className="flex flex-col gap-2 justify-center rounded-full bg-gradient-to-b text-center from-[#4e21ca] to-[#2421ca0f] w-40 h-40 sm:w-44 sm:h-44">
						<h1 className="text-6xl font-bold text-[#fff]">76</h1>
						<h6 className="text-base font-bold text-[#c8c7ff64] leading-tight">of 100</h6>
					</div>
					<div className="text-center">
						<h2 className="mb-2 text-2xl font-bold text-[#fff] sm:text-[28px] sm:mb-3">Great</h2>
						<p className="text-[#c8c7ffac] leading-tight text-base font-medium">
							You scored higher than 65% of <br className="hidden sm:block" /> the <br className="sm:hidden" /> people who have taken <br className="hidden sm:block" /> these
							tests.
						</p>
					</div>
				</div>

				<div className="px-6 pt-4 pb-8 sm:py-9 sm:px-9">
					<h2 className="font-extrabold text-lg text-[#303b5a] mb-8 sm:text-[22px]">Summary</h2>
					<div className="flex flex-col gap-4">
						{data.map((item, index) => (
							<div
								key={index}
								className={item.bg + " flex justify-between py-3 px-4 rounded-lg"}
							>
								<div className="flex">
									<Image
										className="w-5"
										alt={item.alt}
										src={`/result-summary/${item.icon}`}
										width={200}
										height={200}
									/>
									<h2 className={item.color + " ml-3 font-bold"}>
										{item.category}
									</h2>
								</div>
								<div>
									<h2 className="font-extrabold text-[#303b5a80]">
										<span className="text-[#303b5a]">{item.score}</span> / 100
									</h2>
								</div>
							</div>
						))}
					</div>
					<button className="bg-[#303b5a] mt-10 w-full text-base text-[#fff] font-bold py-3 rounded-3xl hover:bg-gradient-to-t from-[#2421ca] to-[#4e21ca]">
						Continue
					</button>
				</div>
			</div>
		</main>
		<Author />
	</>
	);
}
