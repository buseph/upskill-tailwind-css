import React from 'react'
import Head from 'next/head'

export default function HeadSEO({ title, image }) {
	return (
		<Head>
			<title>{title}</title>
			<link rel="icon" href="/frontendMentor.ico" />
			<meta name="title" content={title} />
			<meta name="description" content={title + " challenge by Frontend Mentor. Site coded by Joseph Barredo"} />
			<meta name="og:description" content={title + " challenge by Frontend Mentor. Site coded by Joseph Barredo"} />
			<meta name="twitter:description" content={title + " challenge by Frontend Mentor. Sit codeed by Joseph Barredo"} />
			<meta property="og:image" content={`/images/${image}-preview.png`} />
		</Head>
	)
}
