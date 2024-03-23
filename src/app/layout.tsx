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
			'https://raw.githubusercontent.com/FedeHide/typescript-utility-types-documentation/main/public/assets/typescript-utility-types-documentation-lightmode.webp',
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
