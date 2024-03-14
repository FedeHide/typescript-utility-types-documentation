export default function Pick(): JSX.Element {
	return (
		<section className="main-section" id="Pick">
			<header className="none">Pick</header>
			<header>
				<code className="header-code">{`Pick<Type, Keys>`}</code>
			</header>
			<article>
				<div>
					<p>
						Constructs a type by picking the set of properties{' '}
						<code className="header-code">Keys</code> (string literal or union of string
						literals) from <code className="header-code">Type</code>.
					</p>
					<div className="release-box">
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
