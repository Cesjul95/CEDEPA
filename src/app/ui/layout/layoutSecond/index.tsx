import React, {ReactNode} from 'react'

interface LayoutMainProps {
	children: ReactNode
}
const LayoutSecond = ({children}: LayoutMainProps) => {
	return (
		<div>
			<div>Hola soy layout segundo</div>
			{children}
		</div>
	)
}

export default LayoutSecond
