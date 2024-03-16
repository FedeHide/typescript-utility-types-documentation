'use client'

import { useNavSelection } from '@/hooks/useNavSelection'

export default function Navbar(): JSX.Element {
	const [activeClass, addActiveClass] = useNavSelection(0)
	return (
		<nav id="navbar">
			<div className="header-container">
				<div className="title">
					<div className="icon">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							x="0px"
							y="0px"
							width="45"
							height="45"
							viewBox="0 0 48 48"
						>
							<rect width="36" height="36" x="6" y="6" fill="#1976d2"></rect>
							<polygon
								fill="#fff"
								points="27.49,22 14.227,22 14.227,25.264 18.984,25.264 18.984,40 22.753,40 22.753,25.264 27.49,25.264"
							></polygon>
							<path
								fill="#fff"
								d="M39.194,26.084c0,0-1.787-1.192-3.807-1.192s-2.747,0.96-2.747,1.986 c0,2.648,7.381,2.383,7.381,7.712c0,8.209-11.254,4.568-11.254,4.568V35.22c0,0,2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92 c0-2.449-7.315-2.449-7.315-7.878c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z"
							></path>
						</svg>
					</div>
					<header>Utility Types</header>
				</div>
				<h1>Documentation</h1>
			</div>
			<ul>
				<li>
					<a
						href="#Awaited"
						onClick={() => {
							addActiveClass(1)
						}}
						className={`nav-link ${activeClass === 1 ? 'selected' : ''}`}
					>
						Awaited
					</a>
				</li>
				<li>
					<a
						href="#Partial"
						onClick={() => {
							addActiveClass(2)
						}}
						className={`nav-link ${activeClass === 2 ? 'selected' : ''}`}
					>
						Partial
					</a>
				</li>
				<li>
					<a
						href="#Required"
						onClick={() => {
							addActiveClass(3)
						}}
						className={`nav-link ${activeClass === 3 ? 'selected' : ''}`}
					>
						Required
					</a>
				</li>
				<li>
					<a
						href="#Readonly"
						onClick={() => {
							addActiveClass(4)
						}}
						className={`nav-link ${activeClass === 4 ? 'selected' : ''}`}
					>
						Readonly
					</a>
				</li>
				<li>
					<a
						href="#Record"
						onClick={() => {
							addActiveClass(5)
						}}
						className={`nav-link ${activeClass === 5 ? 'selected' : ''}`}
					>
						Record
					</a>
				</li>
				<li>
					<a
						href="#Pick"
						onClick={() => {
							addActiveClass(6)
						}}
						className={`nav-link ${activeClass === 6 ? 'selected' : ''}`}
					>
						Pick
					</a>
				</li>
				<li>
					<a
						href="#Omit"
						onClick={() => {
							addActiveClass(7)
						}}
						className={`nav-link ${activeClass === 7 ? 'selected' : ''}`}
					>
						Omit
					</a>
				</li>
				<li>
					<a
						href="#Exclude"
						onClick={() => {
							addActiveClass(8)
						}}
						className={`nav-link ${activeClass === 8 ? 'selected' : ''}`}
					>
						Exclude
					</a>
				</li>
				<li>
					<a
						href="#Extract"
						onClick={() => {
							addActiveClass(9)
						}}
						className={`nav-link ${activeClass === 9 ? 'selected' : ''}`}
					>
						Extract
					</a>
				</li>
				<li>
					<a
						href="#NonNullable"
						onClick={() => {
							addActiveClass(10)
						}}
						className={`nav-link ${activeClass === 10 ? 'selected' : ''}`}
					>
						NonNullable
					</a>
				</li>
				<li>
					<a
						href="#Parameters"
						onClick={() => {
							addActiveClass(11)
						}}
						className={`nav-link ${activeClass === 11 ? 'selected' : ''}`}
					>
						Parameters
					</a>
				</li>
				<li>
					<a
						href="#ConstructorParameters"
						onClick={() => {
							addActiveClass(12)
						}}
						className={`nav-link ${activeClass === 12 ? 'selected' : ''}`}
					>
						ConstructorParameters
					</a>
				</li>
				<li>
					<a
						href="#ReturnType"
						onClick={() => {
							addActiveClass(13)
						}}
						className={`nav-link ${activeClass === 13 ? 'selected' : ''}`}
					>
						ReturnType
					</a>
				</li>
				<li>
					<a
						href="#InstanceType"
						onClick={() => {
							addActiveClass(14)
						}}
						className={`nav-link ${activeClass === 14 ? 'selected' : ''}`}
					>
						InstanceType
					</a>
				</li>
				<li>
					<a
						href="#ThisParameterType"
						onClick={() => {
							addActiveClass(15)
						}}
						className={`nav-link ${activeClass === 15 ? 'selected' : ''}`}
					>
						ThisParameterType
					</a>
				</li>
				<li>
					<a
						href="#OmitThisParameter"
						onClick={() => {
							addActiveClass(16)
						}}
						className={`nav-link ${activeClass === 16 ? 'selected' : ''}`}
					>
						OmitThisParameter
					</a>
				</li>
				<li>
					<a
						href="#ThisType"
						onClick={() => {
							addActiveClass(17)
						}}
						className={`nav-link ${activeClass === 17 ? 'selected' : ''}`}
					>
						ThisType
					</a>
				</li>
				<li>
					<a
						href="#Intrinsic_String_Manipulation_Types"
						onClick={() => {
							addActiveClass(18)
						}}
						className={`nav-link ${activeClass === 18 ? 'selected' : ''}`}
					>
						Intrinsic String Manipulation Types
					</a>
				</li>
			</ul>
		</nav>
	)
}
