import {routesClient} from '@/app/routes'

export const findRoutesByPath = (path: string) => {
	for (const key in routesClient) {
		if (routesClient[key].path === path) {
			return routesClient[key]
		}
	}
}
