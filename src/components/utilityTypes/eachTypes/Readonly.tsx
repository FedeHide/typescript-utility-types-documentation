'use client'
import { ThemeContext } from "@/app/context/ThemeContext"
import { useContext } from "react"

export default function Readonly(): JSX.Element {
	const { toggleTheme } = useContext(ThemeContext)
	return (
		<section className="main-section" id="Readonly">
			<header className="none">Readonly</header>
			<header>
				<code className={`header-code ${toggleTheme}`}>{`Readonly<Type>`}</code>
			</header>
			<article>
				<div>
					<p>
						Constructs a type with all properties of{' '}
						<code className={`header-code ${toggleTheme}`}>Type</code> set to{' '}
						<code className={`header-code ${toggleTheme}`}>readonly</code>, meaning the properties of the
						constructed type cannot be reassigned.
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
}
    
const todo: Readonly<Todo> = {
    title: "Delete inactive users",
};
    
todo.`}<span className="wavy">title</span>{` = "Hello";
`}<div className="error">Cannot assign to &apos;title&apos; because it is a read-only property.</div>{`
`}
						</code>
					</pre>
				</section>
				<section>
					<p>
						This utility is useful for representing assignment expressions that will
						fail at runtime (i.e. when attempting to reassign properties of a{' '}
						<span>
							<a
								className="text-linked"
								target="_blank"
								href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze"
							>
								frozen object
							</a>
						</span>
						).
					</p>
					<p className="example">Object.freeze</p>
					<pre>
						<code>
{`
function freeze<Type>(obj: Type): Readonly<Type>;

`}
						</code>
					</pre>
				</section>
			</article>
		</section>
	)
}
