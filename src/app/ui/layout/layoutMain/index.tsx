import React, {ReactNode} from 'react'

interface LayoutMainProps {
	children: ReactNode
}
const LayoutMain = ({children}: LayoutMainProps) => {
	return (
		<div className='grid grid-cols-[1fr_3fr] grid-rows-[auto_1fr] h-screen'>
			<header className='col-span-2 bg-blue-800 text-yellow-400 p-4'>
				Hola soy layout main
			</header>
			<h1 className='col-span-2 bg-blue-800 text-yellow-400 p-4'>Buscador</h1>
			<aside className='bg-gray-200 text-black p-4 h-full'>
				Hola soy sidebar
			</aside>
			<main className='bg-white p-4 text-black'>{children}</main>
		</div>
	)
}

export default LayoutMain
