import { useState } from 'react'

export function useNavSelection(initialState: number): [number, (id: number) => void] {
	const [activeClass, setActiveClass] = useState<number>(initialState)

	const addActiveClass = (id: number): void => {
		setActiveClass(id)
	}

	return [activeClass, addActiveClass]
}
