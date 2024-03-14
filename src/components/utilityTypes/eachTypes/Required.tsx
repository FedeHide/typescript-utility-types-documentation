export default function Required(): JSX.Element {
	return (
		<section className="main-section" id="Required">
			<header className="none">Required</header>
			<header>
				<code className="header-code">Required&lt;Type&gt;</code>
			</header>
			<article>
				<div>
					<p>
						Constructs a type consisting of all properties of{' '}
						<code className="header-code">Type</code> set to required. The opposite of{' '}
						<span>
							<a className="text-linked" href="#Partial">
								Partial
							</a>
						</span>
						.
					</p>
					<div className="release-box">
						<p>Released:</p>
						<p>
							<a
								className="release"
								target="_blank"
								href="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#improved-control-over-mapped-type-modifiers"
							>
								2.8
							</a>
						</p>
					</div>
				</div>
				<p className="example">example</p>
				<section>
					<pre>
						<code>
							{`
interface Props {
	a?: number;
	b?: string;
}
	
const obj: Props = { a: 5 };
	
const `}
							<span className="wavy">obj2</span>
							{`: Required<Props> = { a: 5 };
`}
							<div className="error">{`Property 'b' is missing in type '{ a: number; }' but required 
in type 'Required<Props>'.`}</div>
							{`

`}
						</code>
					</pre>
				</section>
			</article>
		</section>
	)
}
