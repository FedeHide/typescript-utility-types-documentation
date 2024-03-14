export default function ConstructorParameters(): JSX.Element {
	return (
		<section className="main-section" id="ConstructorParameters">
			<header className="none">ConstructorParameters</header>
			<header>
				<code className="header-code">{`ConstructorParameters<Type>`}</code>
			</header>
			<article>
				<div>
					<p>
						Constructs a tuple or array type from the types of a constructor function
						type. It produces a tuple type with all the parameter types (or the type{' '}
						<code className="header-code">never</code> if{' '}
						<code className="header-code">Type</code> is not a function).
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
				<p className="example">example</p>
				<section>
					<pre>
						<code>{`
type T0 = ConstructorParameters<ErrorConstructor>;
    
`}<div className="info">type T0 = [message?: string]</div>{`
type T1 = ConstructorParameters<FunctionConstructor>;
        
`}<div className="info">type T1 = string[]</div>{`
type T2 = ConstructorParameters<RegExpConstructor>;
        
`}<div className="info">type T2 = [pattern: string | RegExp, flags?: string]</div>{`
class C {
    constructor(a: number, b: string) {}
}
type T3 = ConstructorParameters<typeof C>;
        
`}<div className="info">type T3 = [a: number, b: string]</div>{`
type T4 = ConstructorParameters<any>;
        
`}<div className="info">type T4 = unknown[]</div>{`
    
type T5 = ConstructorParameters<Function>;
`}<div className="error">Type &apos;Function&apos; does not satisfy the constraint &apos;abstract new 
(...args: any) =&gt; any&apos;.
    Type &apos;Function&apos; provides no match for the signature &apos;new
(...args: any): any&apos;.</div>{`
`}<div className="info">type T5 = never</div>{`
                        `}</code>
					</pre>
				</section>
			</article>
		</section>
	)
}
