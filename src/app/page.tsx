import Main from '@/components/main/Main'
import Navbar from '@/components/navbar/Navbar'

export default function Home(): JSX.Element {
	return (
		<>
			<div className="grid-container">
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
		</>
	)
}
