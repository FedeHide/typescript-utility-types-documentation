'use client'
import { ThemeContext } from "@/app/context/ThemeContext"
import { useContext } from "react"

export default function InstanceType(): JSX.Element {
	const { toggleTheme } = useContext(ThemeContext)
	return (
		<section className="main-section" id="InstanceType">
			<header className="none">InstanceType</header>
			<header>
				<code className={`header-code ${toggleTheme}`}>{`InstanceType<Type>`}</code>
			</header>
			<article>
				<div>
					<p>
						Constructs a type consisting of the instance type of a constructor function
						in <code className={`header-code ${toggleTheme}`}>Type</code>.
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
class C {
    x = 0;
    y = 0;
}
    
type T0 = InstanceType<typeof C>;
    
`}<div className="info">type T0 = C</div>{`
type T1 = InstanceType<any>;
    
`}<div className="info">type T1 = any</div>{`
type T2 = InstanceType<never>;
    
`}<div className="info">type T2 = never</div>{`
type T3 = InstanceType<string>;
`}<div className="error">Type &apos;string&apos; does not satisfy the constraint &apos;abstract new
(...args: any) =&gt; any&apos;.</div>{`
    
`}<div className="info">type T3 = any</div>{`
type T4 = InstanceType<Function>;
`}<div className="error">Type &apos;Function&apos; does not satisfy the constraint &apos;abstract new
(...args: any) =&gt; any&apos;.
Type &apos;Function&apos; provides no match for the signature &apos;new
(...args: any): any&apos;.</div>{`
`}<div className="info">type T4 = any</div>{`
                        `}</code>
					</pre>
				</section>
			</article>
		</section>
	)
}
