'use client'
import { ThemeContext } from "@/app/context/ThemeContext"
import { useContext } from "react"

export default function NonNullable(): JSX.Element {
	const { toggleTheme } = useContext(ThemeContext)
	return (
		<section className="main-section" id="NonNullable">
			<header className="none">NonNullable</header>
			<header>
				<code className={`header-code ${toggleTheme}`}>{`NonNullable<Type>`}</code>
			</header>
			<article>
				<div>
					<p>
						Constructs a type by excluding <code className={`header-code ${toggleTheme}`}>null</code> and{' '}
						<code className={`header-code ${toggleTheme}`}>undefined</code> from{' '}
						<code className={`header-code ${toggleTheme}`}>Type</code>.
					</p>
					<div className={`release-box ${toggleTheme}`}>
						<p>Released:</p>
						<p>
							<a
								className="release"
								target="_blank"
								href="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#predefined-conditional-types"
							>
								2.8
							</a>
						</p>
					</div>
				</div>
				<p className="example">example</p>
				<section>
					<pre>
						<code>{`
type T0 = NonNullable<string | number | undefined>;

`}<div className="info">type T0 = string | number</div>{`
type T1 = NonNullable<string[] | null | undefined>;

`}<div className="info">type T1 = string[]</div>{`
                        `}</code>
					</pre>
				</section>
			</article>
		</section>
	)
}
