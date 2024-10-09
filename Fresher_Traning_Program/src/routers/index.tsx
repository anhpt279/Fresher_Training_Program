import { RouteObject } from "@/routers/interface";
import Welcome from "@/views/welcome";
import { Navigate, useRoutes } from "react-router-dom";

const metaRouters = import.meta.globEager("./modules/*.tsx");

export const routerArray: RouteObject[] = [];
Object.keys(metaRouters).forEach(item => {
	Object.keys(metaRouters[item]).forEach((key: any) => {
		routerArray.push(...metaRouters[item][key]);
	});
});

export const rootRouter: RouteObject[] = [
	{
		path: "/",
		element: <Navigate to="/welcome" />
	},
	{
		path: "/welcome",
		element: <Welcome />,
		meta: {
			requiresAuth: false,
			title: "Welcome",
			key: "welcome"
		}
	},
	...routerArray,
	{
		path: "*",
		element: <Navigate to="/404" />
	}
];

const Router = () => {
	const routes = useRoutes(rootRouter);
	return routes;
};

export default Router;
