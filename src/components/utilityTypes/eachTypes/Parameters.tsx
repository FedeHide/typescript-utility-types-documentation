export default function Parameters(): JSX.Element {
	return (
		<section className="main-section" id="Parameters">
			<header className="none">Parameters</header>
			<header>
				<code className="header-code">{`Parameters<Type>`}</code>
			</header>
			<article>
				<div>
					<p>
						Constructs a tuple type from the types used in the parameters of a function
						type <code className="header-code">Type</code>.
					</p>
					<div className="release-box">
						<p>Released:</p>
						<p>
							<a
								className="release"
								target="_blank"
								href="https://github.com/microsoft/TypeScript/pull/26243"
							>
								3.1
							</a>
						</p>
					</div>
				</div>
				<p>
					For overloaded functions, this will be the parameters of the <i>last</i>{' '}
					signature; see{' '}
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
declare function f1(arg: { a: number; b: string }): void;

type T0 = Parameters<() => string>;
        
`}<div className="info">type T0 = []</div>{`
type T1 = Parameters<(s: string) => void>;
        
`}<div className="info">type T1 = [s: string]</div>{`
type T2 = Parameters<<T>(arg: T) => T>;
        
`}<div className="info">type T2 = [arg: unknown]</div>{`
type T3 = Parameters<typeof f1>;
        
`}<div className="info">{`type T3 = [arg: {
    a: number;
    b: string;
}]`}</div>{`
type T4 = Parameters<any>;
        
`}<div className="info">type T4 = unknown[]</div>{`
type T5 = Parameters<never>;
        
`}<div className="info">type T5 = never</div>{`
type T6 = Parameters<string>;
`}<div className="error">Type &apos;string&apos; does not satisfy the constraint 
&apos;(...args: any) =&gt; any&apos;.</div>{`
        
`}<div className="info">type T6 = never</div>{`
type T7 = Parameters<Function>;
`}<div className="error">Type &apos;Function&apos; does not satisfy the constraint 
&apos;(...args: any) =&gt; any&apos;.
    Type &apos;Function&apos; provides no match for the signature 
&apos;(...args: any): any&apos;.</div>   {`
`}<div className="info">type T7 = never</div>{`
                        `}</code>
					</pre>
				</section>
			</article>
		</section>
	)
}
