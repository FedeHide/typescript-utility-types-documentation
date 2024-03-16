'use client'
import { ThemeContext } from "@/app/context/ThemeContext"
import { useContext } from "react"

export default function Omit(): JSX.Element {
	const { toggleTheme } = useContext(ThemeContext)
	return (
		<section className="main-section" id="Omit">
			<header className="none">Omit</header>
			<header>
				<code className={`header-code ${toggleTheme}`}>{`Omit<Type, Keys>`}</code>
			</header>
			<article>
				<div>
					<p>
						Constructs a type by picking all properties from{' '}
						<code className={`header-code ${toggleTheme}`}>Type</code> and then removing{' '}
						<code className={`header-code ${toggleTheme}`}>Keys</code> (string literal or union of string
						literals). The opposite of{' '}
						<span>
							<a className="text-linked" href="#Pick">
								Pick
							</a>
						</span>
						.
					</p>
					<div className={`release-box ${toggleTheme}`}>
						<p>Released:</p>
						<p>
							<a
								className="release"
								target="_blank"
								href="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-5.html#the-omit-helper-type"
							>
								3.5
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
    createdAt: number;
}
    
type TodoPreview = Omit<Todo, "description">;
    
const todo: TodoPreview = {
    title: "Clean room",
    completed: false,
    createdAt: 1615544252770,
};
    
todo;
    
`}<div className="info">const todo: TodoPreview</div>{`
    
type TodoInfo = Omit<Todo, "completed" | "createdAt">;
    
const todoInfo: TodoInfo = {
    title: "Pick up kids",
    description: "Kindergarten closes at 5pm",
};
    
todoInfo;
        
`}<div className="info">const todoInfo: TodoInfo</div>{`

`}
						</code>
					</pre>
				</section>
			</article>
		</section>
	)
}
