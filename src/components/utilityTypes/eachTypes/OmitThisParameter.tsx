export default function OmitThisParameter(): JSX.Element {
	return (
		<section className="main-section" id="OmitThisParameter">
			<header className="none">OmitThisParameter</header>
			<header>
				<code className="header-code">{`OmitThisParameter<Type>`}</code>
			</header>
			<article>
				<div>
					<p>
						Removes the{' '}
						<span>
							<a
								className="text-linked"
								target="_blank"
								href="https://www.typescriptlang.org/docs/handbook/functions.html#this-parameters"
							>
								this
							</a>
						</span>
						parameter from <code className="header-code">Type</code>. If{' '}
						<code className="header-code">Type</code> has no explicitly declared{' '}
						<code className="header-code">this</code> parameter, the result is simply{' '}
						<code className="header-code">Type</code>. Otherwise, a new function type
						with no <code className="header-code">this</code> parameter is created from{' '}
						<code className="header-code">Type</code>. Generics are erased and only the
						last overload signature is propagated into the new function type.
					</p>
					<div className="release-box">
						<p>Released:</p>
						<p>
							<a
								className="release"
								target="_blank"
								href="https://github.com/microsoft/TypeScript/pull/28920"
							>
								3.3
							</a>
						</p>
					</div>
				</div>
				<p className="example">example</p>
				<section>
					<pre>
						<code>{`
function toHex(this: Number) {
    return this.toString(16);
}
    
const fiveToHex: OmitThisParameter<typeof toHex> = toHex.bind(5);
    
console.log(fiveToHex());
                        `}</code>
					</pre>
				</section>
			</article>
		</section>
	)
}
