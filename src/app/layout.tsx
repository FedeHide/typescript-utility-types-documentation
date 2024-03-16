import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'

const inter = Inter({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
	title: 'TypeScript Utility Types',
	description: 'This is a fake documentation website, a freecodecamp assignment',
	openGraph: {
		url: 'https://typescript-utility-types-documentation.vercel.app/',
		type: 'website',
		title: 'TypeScript Utility Types',
		description: 'This is a fake documentation website, a freecodecamp assignment',
		images: [
			'https://ogcdn.net/2c2c6737-47d4-4459-9969-e711eb48394c/v1/fedehide.github.io/TypeScript%20Utility%20Types/This%20is%20a%20fake%20documentation%20website%2C%20a%20freecodecamp%20assignment./https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fdocuments%2F818dbd7c-99a6-4f9c-a2a2-36a5b47fe95b.png%3Ftoken%3DdXEJ2JXHb3Z_BlXNzmGYHjbezVLG8TRHdt_KqUqyWFA%26height%3D525%26width%3D1200%26expires%3D33241972125/og.png',
		],
	},
	twitter: {
		card: 'summary_large_image',
		site: 'https://typescript-utility-types-documentation.vercel.app/',
	},
}

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>): JSX.Element {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	)
}
