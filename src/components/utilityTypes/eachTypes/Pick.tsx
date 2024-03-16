'use client'
import { ThemeContext } from "@/app/context/ThemeContext"
import { useContext } from "react"

export default function Pick(): JSX.Element {
	const { toggleTheme } = useContext(ThemeContext)
	return (
		<section className="main-section" id="Pick">
			<header className="none">Pick</header>
			<header>
				<code className={`header-code ${toggleTheme}`}>{`Pick<Type, Keys>`}</code>
			</header>
			<article>
				<div>
					<p>
						Constructs a type by picking the set of properties{' '}
						<code className={`header-code ${toggleTheme}`}>Keys</code> (string literal or union of string
						literals) from <code className={`header-code ${toggleTheme}`}>Type</code>.
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
interface Todo {
    title: string;
    description: string;
    completed: boolean;
}
    
type TodoPreview = Pick<Todo, "title" | "completed">;
    
const todo: TodoPreview = {
    title: "Clean room",
    completed: false,
};
    
todo;
    
`}<div className="info">const todo: TodoPreview</div>{`

`}
						</code>
					</pre>
				</section>
			</article>
		</section>
	)
}
