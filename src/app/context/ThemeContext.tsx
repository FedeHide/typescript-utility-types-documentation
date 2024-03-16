import { createContext } from 'react'

interface ThemeContextType {
	toggleTheme: string
	toggleThemeClass: () => void
}

export const ThemeContext = createContext<ThemeContextType>({
	toggleTheme: '',
	toggleThemeClass: () => {},
})
