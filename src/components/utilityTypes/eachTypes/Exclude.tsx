'use client'
import { ThemeContext } from "@/app/context/ThemeContext"
import { useContext } from "react"
export default function Exclude(): JSX.Element {
	const { toggleTheme } = useContext(ThemeContext)
	return (
		<section className="main-section" id="Exclude">
			<header className="none">Exclude</header>
			<header>
				<code className={`header-code ${toggleTheme}`}>{`Exclude<UnionType, ExcludedMembers>`}</code>
			</header>
			<article>
				<div>
					<p>
						Constructs a type by excluding from{' '}
						<code className={`header-code ${toggleTheme}`}>UnionType</code> all union members that are
						assignable to <code className={`header-code ${toggleTheme}`}>ExcludedMembers</code>.
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
type T0 = Exclude<"a" | "b" | "c", "a">;

`}<div className="info">type T0 = &quot;b&quot; | &quot;c&quot;</div>{`
type T1 = Exclude<"a" | "b" | "c", "a" | "b">;
        
`}<div className="info">type T1 = &quot;c&quot;</div>{`
type T2 = Exclude<string | number | (() => void), Function>;
        
`}<div className="info">type T2 = string | number</div>{`
    
type Shape =
    | { kind: "circle"; radius: number }
    | { kind: "square"; x: number }
    | { kind: "triangle"; x: number; y: number };
    
type T3 = Exclude<Shape, { kind: "circle" }>
        
`}<div className="info">{`type T3 = {
    kind: "square";
    x: number;
} | {
    kind: "triangle";
    x: number;
    y: number;`}</div>{`
}
                        `}</code>
					</pre>
				</section>
			</article>
		</section>
	)
}
