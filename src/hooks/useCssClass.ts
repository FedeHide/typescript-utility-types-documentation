import { useState } from 'react'

export function useCssClass(initialState: number): [number, (id: number) => void] {
	const [cssClass, setCssClass] = useState<number>(initialState)

	const addCssClass = (id: number): void => {
		setCssClass(id)
	}

	return [cssClass, addCssClass]
}
