export default function Intrinsic(): JSX.Element {
	return (
		<section className="main-section" id="Intrinsic_String_Manipulation_Types">
			<header className="none">Intrinsic String Manipulation Types</header>
			<article>
				<header>Intrinsic String Manipulation Types</header>
				<header>
					<code className="header-code last">{`Uppercase<StringType>`}</code>
				</header>
				<header>
					<code className="header-code last">{`Lowercase<StringType>`}</code>
				</header>
				<header>
					<code className="header-code last">{`Capitalize<StringType>`}</code>
				</header>
				<header>
					<code className="header-code last">{`Uncapitalize<StringType>`}</code>
				</header>
				<p>
					To help with string manipulation around template string literals, TypeScript
					includes a set of types which can be used in string manipulation within the type
					system. You can find those in the{' '}
					<span>
						<a
							className="text-linked"
							target="_blank"
							href="https://www.typescriptlang.org/docs/handbook/utility-types.html#intrinsic-string-manipulation-types"
						>
							Template Literal Types
						</a>
					</span>{' '}
					documentation.
				</p>
			</article>
		</section>
	)
}
