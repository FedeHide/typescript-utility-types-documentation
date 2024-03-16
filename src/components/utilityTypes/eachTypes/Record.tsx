'use client'
import { ThemeContext } from "@/app/context/ThemeContext"
import { useContext } from "react"

export default function Record(): JSX.Element {
	const { toggleTheme } = useContext(ThemeContext)
	return (
		<section className="main-section" id="Record">
			<header className="none">Record</header>
			<header>
				<code className={`header-code ${toggleTheme}`}>{`Record<Keys, Type>`}</code>
			</header>
			<article>
				<div>
					<p>
						Constructs an object type whose property keys are{' '}
						<code className={`header-code ${toggleTheme}`}>Keys</code> and whose property values are{' '}
						<code className={`header-code ${toggleTheme}`}>Type</code>. This utility can be used to map
						the properties of a type to another type.
					</p>
					<div className={`release-box ${toggleTheme}`}>
						<p>Released:</p>
						<p>
							<a
								className="release"
								target="_blank"
								href="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html#partial-readonly-record-and-pick"
							>
								2.1
							</a>
						</p>
					</div>
				</div>
				<p className="example">example</p>
				<section>
					<pre>
						<code>
							{`
interface CatInfo {
    age: number;
    breed: string;
}
    
type CatName = "miffy" | "boris" | "mordred";
    
const cats: Record<CatName, CatInfo> = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Maine Coon" },
    mordred: { age: 16, breed: "British Shorthair" },
};
    
cats.boris;
    
`}<div className="info">const cats: Record{`<CatName, CatInfo>`}</div>{`

`}
						</code>
					</pre>
				</section>
			</article>
		</section>
	)
}
