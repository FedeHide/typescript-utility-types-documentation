'use client'
import { ThemeContext } from "@/app/context/ThemeContext"
import { useContext } from "react"

export default function Awaited(): JSX.Element {
	const { toggleTheme } = useContext(ThemeContext)
	return (
		<section className="main-section" id="Awaited">
			<header className="none">Awaited</header>
			<ul className="none">
				<li className="none"></li>
				<li className="none"></li>
				<li className="none"></li>
				<li className="none"></li>
				<li className="none"></li>
			</ul>
			<div>
				<header>
					<code className={`header-code ${toggleTheme}`}>Awaited&lt;Type&gt;</code>
				</header>
			</div>
			<article>
				<div>
					<p>
						This type is meant to model operations like{' '}
						<code className={`header-code ${toggleTheme}`}>await</code> in{' '}
						<code className={`header-code ${toggleTheme}`}>async</code> functions, or the{' '}
						<code className={`header-code ${toggleTheme}`}>then()</code> method on{' '}
						<code className={`header-code ${toggleTheme}`}>Promises</code> - specifically, the way that
						they recursively unwrap <code className={`header-code ${toggleTheme}`}>Promises</code>.
					</p>
					<div className={`release-box ${toggleTheme}`}>
						<p>Released:</p>
						<p>
							<a
								className="release"
								target="_blank"
								href="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-5.html#the-awaited-type-and-promise-improvements"
							>
								4.5
							</a>
						</p>
					</div>
				</div>
				<p className="example">example</p>
				<section>
					<pre>
						<code>
							{`
type A = Awaited<Promise<string>>

`}
							<div className="info">type A = string</div>
							{`
type B = Awaited<Promise<Promise<number>>>

`}
							<div className="info">type B = number</div>
							{`
type C = Awaited<boolean | Promise<number>>

`}
							<div className="info">type C = number | boolean</div>
							{`

`}
						</code>
					</pre>
				</section>
			</article>
		</section>
	)
}
