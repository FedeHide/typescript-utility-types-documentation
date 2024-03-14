export default function Partial(): JSX.Element {
	return (
		<section className="main-section" id="Partial">
			<header className="none">Partial</header>
			<header>
				<code className="header-code">Partial&lt;Type&gt;</code>
			</header>
			<article>
				<div>
					<p>
						Constructs a type with all properties of{' '}
						<code className="header-code">Type</code> set to optional. This utility will
						return a type that represents all subsets of a given type.
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
}
`}
							{`
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
	return { ...todo, ...fieldsToUpdate };
}
	
const todo1 = {
	title: "organize desk",
	description: "clear clutter",
};
	
const todo2 = updateTodo(todo1, {
	description: "throw out trash",
});

`}
						</code>
					</pre>
				</section>
			</article>
		</section>
	)
}
