'use client'
import { useState } from 'react'
import { ThemeContext } from './ThemeContext'

interface props {
	children: JSX.Element | JSX.Element[]
}

export const ThemeProvider = ({ children }: props): JSX.Element => {
	const [toggleTheme, setToggleTheme] = useState<string>('')

	const toggleThemeClass = (): void => {
		setToggleTheme(toggleTheme === '' ? 'active' : '')
	}

	return (
		<ThemeContext.Provider value={{ toggleTheme, toggleThemeClass }}>
			{children}
		</ThemeContext.Provider>
	)
}
