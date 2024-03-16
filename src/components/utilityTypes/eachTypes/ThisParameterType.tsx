'use client'
import { ThemeContext } from "@/app/context/ThemeContext"
import { useContext } from "react"

export default function ThisParameterType(): JSX.Element {
	const { toggleTheme } = useContext(ThemeContext)
	return (
		<section className="main-section" id="ThisParameterType">
			<header className="none">ThisParameterType</header>
			<header>
				<code className={`header-code ${toggleTheme}`}>{`ThisParameterType<Type>`}</code>
			</header>
			<article>
				<div>
					<p>
						Extracts the type of the{' '}
						<span>
							<a
								className="text-linked"
								target="_blank"
								href="https://www.typescriptlang.org/docs/handbook/functions.html#this-parameters"
							></a>
						</span>
						this parameter for a function type, or{' '}
						<span>
							<a
								className="text-linked"
								target="_blank"
								href="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-0.html#new-unknown-top-type"
							>
								unknown
							</a>
						</span>
						if the function type has no <code className={`header-code ${toggleTheme}`}>this</code>{' '}
						parameter.
					</p>
					<div className={`release-box ${toggleTheme}`}>
						<p>Released:</p>
						<p>
							<a
								className="release"
								target="_blank"
								href="https://github.com/microsoft/TypeScript/pull/28920"
							>
								3.3
							</a>
						</p>
					</div>
				</div>
				<p className="example">example</p>
				<section>
					<pre>
						<code>{`
function toHex(this: Number) {
    return this.toString(16);
}
    
function numberToString(n: ThisParameterType<typeof toHex>) {
    return toHex.apply(n);
}
                        `}</code>
					</pre>
				</section>
			</article>
		</section>
	)
}
