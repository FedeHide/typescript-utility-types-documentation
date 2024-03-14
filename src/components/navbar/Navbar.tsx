export default function Navbar(): JSX.Element {
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
					<a href="#Awaited" className="nav-link">
						Awaited
					</a>
				</li>
				<li>
					<a href="#Partial" className="nav-link">
						Partial
					</a>
				</li>
				<li>
					<a href="#Required" className="nav-link">
						Required
					</a>
				</li>
				<li>
					<a href="#Readonly" className="nav-link">
						Readonly
					</a>
				</li>
				<li>
					<a href="#Record" className="nav-link">
						Record
					</a>
				</li>
				<li>
					<a href="#Pick" className="nav-link">
						Pick
					</a>
				</li>
				<li>
					<a href="#Omit" className="nav-link">
						Omit
					</a>
				</li>
				<li>
					<a href="#Exclude" className="nav-link">
						Exclude
					</a>
				</li>
				<li>
					<a href="#Extract" className="nav-link">
						Extract
					</a>
				</li>
				<li>
					<a href="#NonNullable" className="nav-link">
						NonNullable
					</a>
				</li>
				<li>
					<a href="#Parameters" className="nav-link">
						Parameters
					</a>
				</li>
				<li>
					<a href="#ConstructorParameters" className="nav-link">
						ConstructorParameters
					</a>
				</li>
				<li>
					<a href="#ReturnType" className="nav-link">
						ReturnType
					</a>
				</li>
				<li>
					<a href="#InstanceType" className="nav-link">
						InstanceType
					</a>
				</li>
				<li>
					<a href="#ThisParameterType" className="nav-link">
						ThisParameterType
					</a>
				</li>
				<li>
					<a href="#OmitThisParameter" className="nav-link">
						OmitThisParameter
					</a>
				</li>
				<li>
					<a href="#ThisType" className="nav-link">
						ThisType
					</a>
				</li>
				<li>
					<a href="#Intrinsic_String_Manipulation_Types" className="nav-link">
						Intrinsic String Manipulation Types
					</a>
				</li>
			</ul>
		</nav>
	)
}
