import React from "react";
import { Hanken_Grotesk } from "next/font/google";
import Image from "next/image";

const hanken = Hanken_Grotesk({ subsets: ["latin"] });

const data = [
	{
		category: "Reaction",
		score: 80,
		icon: "icon-reaction.svg",
		bg: "bg-[#ff575715]",
		color: "text-[#ff5757]",
		alt: "icon-reaction",
	},
	{
		category: "Memory",
		score: 92,
		icon: "icon-memory.svg",
		bg: "bg-[#ffb01f15]",
		color: "text-[#ffb01f]",
		alt: "icon-memory",
	},
	{
		category: "Verbal",
		score: 61,
		icon: "icon-verbal.svg",
		bg: "bg-[#00bd9115]",
		color: "text-[#00bd91]",
		alt: "icon-verbal",
	},
	{
		category: "Visual",
		score: 72,
		icon: "icon-visual.svg",
		bg: "bg-[#1125d415]",
		color: "text-[#1125d4]",
		alt: "icon-visual",
	},
];

export default function Page() {
	return (
		<main className={hanken.className}>
			<div className="pt-5 pb-9 gap-6 flex flex-col items-center bg-gradient-to-b from-[#7857ff] to-[#2e2be9] rounded-b-3xl">
				<h2 className="text-[#c8c7ff] font-medium text-base">Your Result</h2>
				<div className="flex flex-col gap-2 justify-center rounded-full bg-gradient-to-b text-center from-[#4e21cac9] to-[#2421ca0a] w-40 h-40">
					<h1 className="text-6xl font-bold text-[#fff]">76</h1>
					<h6 className="text-base font-bold text-[#c8c7ff64]">of 100</h6>
				</div>
				<div className="text-center">
					<h2 className="mb-2 text-2xl font-bold text-[#fff]">Great</h2>
					<p className="text-[#c8c7ffac] leading-tight text-base font-medium">
						You scored higher than 65% of the <br /> people who have taken these
						tests.
					</p>
				</div>
			</div>

			<div className="px-6 pt-4 pb-8">
				<h2 className="font-extrabold text-lg text-[#303b5a] mb-5">Summary</h2>
				<div className="flex flex-col gap-4">
					{data.map((item, index) => (
						<div
							key={index}
							className={item.bg + " flex justify-between py-4 px-4 rounded-lg"}
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
								<h2 className="font-extrabold text-[#303b5a50]">
									<span className="text-[#303b5a]">{item.score}</span> / 100
								</h2>
							</div>
						</div>
					))}
				</div>
				<button className="bg-[#303b5a] mt-7 w-full text-lg text-[#fff] font-bold py-3 rounded-3xl hover:bg-[#222c45] hover:text-[#ffffffcd] transition-all">
					Continue
				</button>
			</div>
		</main>
	);
}
