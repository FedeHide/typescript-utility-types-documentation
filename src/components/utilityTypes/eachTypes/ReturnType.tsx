export default function ReturnType(): JSX.Element {
	return (
		<section className="main-section" id="ReturnType">
			<header className="none">ReturnType</header>
			<header>
				<code className="header-code">{`ReturnType<Type>`}</code>
			</header>
			<article>
				<div>
					<p>
						Constructs a type consisting of the return type of function{' '}
						<code className="header-code">Type</code>.
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
				<p>
					For overloaded functions, this will be the return type of the last signature;
					see{' '}
					<span>
						<a
							className="text-linked"
							target="_blank"
							href="https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types"
						>
							Inferring Within Conditional Types
						</a>
					</span>
					.
				</p>
				<p className="example">example</p>
				<section>
					<pre>
						<code>{`
declare function f1(): { a: number; b: string };

type T0 = ReturnType<() => string>;
        
`}<div className="info">type T0 = string</div>{`
type T1 = ReturnType<(s: string) => void>;
        
`}<div className="info">type T1 = void</div>{`
type T2 = ReturnType<<T>() => T>;
        
`}<div className="info">type T2 = unknown</div>{`
type T3 = ReturnType<<T extends U, U extends number[]>() => T>;
        
`}<div className="info">type T3 = number[]</div>{`
type T4 = ReturnType<typeof f1>;
        
`}<div className="info">{`type T4 = {
    a: number;
    b: string;
}`}</div>{`
type T5 = ReturnType<any>;
        
`}<div className="info">type T5 = any</div>{`
type T6 = ReturnType<never>;
        
`}<div className="info">type T6 = never</div>{`
type T7 = ReturnType<string>;
`}<div className="error">Type &apos;string&apos; does not satisfy the constraint 
&apos;(...args: any) =&gt; any&apos;.</div>{`
`}<div className="info">type T7 = any</div>{`
type T8 = ReturnType<Function>;
`}<div className="error">Type &apos;Function&apos; does not satisfy the constraint 
&apos;(...args: any) =&gt; any&apos;.
    Type &apos;Function&apos; provides no match for the signature
&apos;(...args: any): any&apos;.</div>{`
`}<div className="info">type T8 = any</div>{`
                        `}</code>
					</pre>
				</section>
			</article>
		</section>
	)
}
