import React from "react";
import Image from "next/image";
import Author from "@components/Author";
import HeadSEO from "@components/HeadSEO";
import { Overpass } from "next/font/google";

const overpass = Overpass({ subsets: ['latin'], })

export default function Index() {

	return (
		<>
			<HeadSEO title="Crowd Funding Landing Page" description="Crowd Funding Landing Page" image="crowd-funding-preview" />
			<main className=''>
				LET'S BUILD AGAIN
			</main>
		</>
	)
}