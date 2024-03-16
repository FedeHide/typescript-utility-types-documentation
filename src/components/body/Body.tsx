'use client'
import Main from '../main/Main'
import Navbar from '../navbar/Navbar'
import { ThemeContext } from '@/app/context/ThemeContext'
import { useContext } from 'react'

export default function Body(): JSX.Element {
	const { toggleTheme } = useContext(ThemeContext)
	return (
		<div className={`grid-container ${toggleTheme}`}>
			<Navbar />
			<Main />
			<a href="#" className="back-to-top">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="24"
					viewBox="0 -960 960 960"
					width="24"
				>
					<path d="m296-224-56-56 240-240 240 240-56 56-184-183-184 183Zm0-240-56-56 240-240 240 240-56 56-184-183-184 183Z" />
				</svg>
			</a>
		</div>
	)
}
