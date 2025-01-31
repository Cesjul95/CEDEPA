'use client'
import {usePathname} from 'next/navigation'
import React from 'react'
import LayoutMain from '../layoutMain'
import LayoutSecond from '../layoutSecond'
import {routesClient} from '@/app/routes'
import {findRoutesByPath} from '@/app/utils/findRoutesByPath'

import {ReactNode} from 'react'

const DefineLayout = ({children}: {children: ReactNode}) => {
	// vamos a obtner el path de la pagina actual usar - usePath
	const path = usePathname()

	const typeLayout = findRoutesByPath(path)

	console.log({path, typeLayout})
	// un diccionario de rutas y sus respectivos layouts
	const layouts = {
		home: LayoutMain,
		private: LayoutSecond,
		public: LayoutMain,
	}

	const SelectedLayout = layouts[typeLayout?.typeLayout]

	if (!SelectedLayout) return null
	return <SelectedLayout>{children}</SelectedLayout>
}

export default DefineLayout
