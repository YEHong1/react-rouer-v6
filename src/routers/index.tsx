import { RouteObject } from 'react-router-dom';
import LayoutPage from "../pages/LayoutPage";
import Home from "../pages/Home";
import Login from "../pages/user/Login";
import UserInfo from "../pages/UserInfo";

const router: RouteObject[] = [
	{
		path: '/',
		element: <LayoutPage />,
		children: [
			{ path: '/index', element: <Home /> },
			{ path: '/userInfo/:id', element: <UserInfo /> },
		]
	},
	{ path: '/user/login', element: <Login /> },
	{ path: '*', element: 'Not Found' }
];

export default router;