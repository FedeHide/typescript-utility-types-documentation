export default function Extract(): JSX.Element {
	return (
		<section className="main-section" id="Extract">
			<header className="none">Extract</header>
			<header>
				<code className="header-code">{`Extract<Type, Union>`}</code>
			</header>
			<article>
				<div>
					<p>
						Constructs a type by extracting from{' '}
						<code className="header-code">Type</code> all union members that are
						assignable to <code className="header-code">Union</code>.
					</p>
					<div className="release-box">
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
type T0 = Extract<"a" | "b" | "c", "a" | "f">;

`}<div className="info">type T0 = &quot;a&quot;</div>{`
type T1 = Extract<string | number | (() => void), Function>;

`}<div className="info">type T1 = () =&gt; void</div>{`

type Shape =
    | { kind: "circle"; radius: number }
    | { kind: "square"; x: number }
    | { kind: "triangle"; x: number; y: number };

type T2 = Extract<Shape, { kind: "circle" }>

`}<div className="info">{`type T2 = {
    kind: "circle";
    radius: number;
}`}</div>{`
                        `}</code>
					</pre>
				</section>
			</article>
		</section>
	)
}
