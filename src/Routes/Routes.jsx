import { createBrowserRouter } from "react-router";
import RootLayouts from "../Layouts/RootLayouts";
import Home from "../Pages/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";
import AuthLayouts from "../Layouts/AuthLayouts";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";


const router = createBrowserRouter([
    {
        path:'/',
        Component: RootLayouts,
        children:[
            {
                index: true,
                Component: Home
            },
            {
                path:"/Coverage",
                Component: Coverage,
                loader: () => fetch('/warehouses.json').then(res => res.json())
            }
        ]
    },
    {
        path:'/',
        Component: AuthLayouts,
        children:[
            {
                path:'/login',
                Component: Login
            },
            {
                path: '/register',
                Component: Register
            }
        ]
    }
]);

export default router;