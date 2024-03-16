'use client'
import { ThemeContext } from "@/app/context/ThemeContext"
import { useContext } from "react"

export default function ThisType(): JSX.Element {
    const { toggleTheme } = useContext(ThemeContext)
	return (
		<section className="main-section" id="ThisType">
        <header className="none">ThisType</header>
        <header><code className={`header-code ${toggleTheme}`}>{`ThisType<Type>`}</code></header>
        <article>
            <div>
                <p>This utility does not return a transformed type. Instead, it serves as a marker for a contextual
                    <span><a className="text-linked" target="_blank"
                            href="https://www.typescriptlang.org/docs/handbook/functions.html#this"></a></span>this
                    type. Note that the <span><a className="text-linked" target="_blank"
                            href="https://www.typescriptlang.org/tsconfig#noImplicitThis"></a></span>noImplicitThis flag
                    must be enabled to use this utility.</p>
                <div className={`release-box ${toggleTheme}`}>
                    <p>Released:</p>
                    <p><a className="release" target="_blank"
                            href="https://github.com/microsoft/TypeScript/pull/14141">2.3</a></p>
                </div>
            </div>
            <section>
                <p className="example">example</p>
                <pre>
                        <code>{`
type ObjectDescriptor<D, M> = {
    data?: D;
    methods?: M & ThisType<D & M>; // Type of 'this' in methods is D & M
};
    
function makeObject<D, M>(desc: ObjectDescriptor<D, M>): D & M {
    let data: object = desc.data || {};
    let methods: object = desc.methods || {};
    return { ...data, ...methods } as D & M;
}
    
let obj = makeObject({
    data: { x: 0, y: 0 },
    methods: {
        moveBy(dx: number, dy: number) {
            this.x += dx; // Strongly typed this
            this.y += dy; // Strongly typed this
        },  
    },
});
    
obj.x = 10;
obj.y = 20;
obj.moveBy(5, 5);
                        `}</code>
                    </pre>
            </section>
            <section>
                <p>In the example above, the <code className={`header-code ${toggleTheme}`}>methods</code> object in the argument to
                    <code className={`header-code ${toggleTheme}`}>makeObject</code> has a contextual type that includes <code
                        className={`header-code ${toggleTheme}`}>{`ThisType<D & M>`}</code> and therefore the type of <span><a
                            className="text-linked" target="_blank"
                            href="https://www.typescriptlang.org/docs/handbook/functions.html#this"></a>this</span> in
                    methods within the <code className={`header-code ${toggleTheme}`}>methods</code> object is <code
                        className={`header-code ${toggleTheme}`}>{`{ x: number, y: number } & { moveBy(dx: number, dy: number): void }`}</code>.
                    Notice how the type of the methods property simultaneously is an inference target and a source for
                    the <code className={`header-code ${toggleTheme}`}>this</code> type in methods.</p>
                <p>The <code className={`header-code ${toggleTheme}`}>{`ThisType<T>`}</code> marker interface is simply an empty interface
                    declared in <code className={`header-code ${toggleTheme}`}>lib.d.ts</code>. Beyond being recognized in the contextual
                    type of an object literal, the interface acts like any empty interface.</p>
            </section>
        </article>
    </section>
	)
}
