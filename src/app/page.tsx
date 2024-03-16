import Body from '@/components/body/Body'
import { ThemeProvider } from './context/ThemeProvider'

export default function Home(): JSX.Element {
	return (
		<>
			<ThemeProvider>
				<Body />
			</ThemeProvider>
		</>
	)
}
