import {createBrowserRouter} from "react-router-dom"
import MainLayout from "@/layouts/MainLayout"
import ProfilePage from "../../features/users/pages/ProfilePage";
import HomePage from "../../features/home/pages/HomePage";
import AuthLayout from "@/layouts/AuthLayout";
import CreateSuppliers from "../../features/suppliers/CreateSuppliers";
import {ConfigUserPage} from "../../features/users";
import ListUserPage from "../../features/users/pages/ListUserPage";
import {CreateUserPage} from  "@/features/users"  

const router = createBrowserRouter([
    {
            element:<MainLayout/>,
            children: [
                {
                    path: "/",
                    element: <HomePage/>
                },
                {
                    path: "login",
                    element: <CreateUserPage/>
                },
                {
                    path: "listar",
                    element: <ListUserPage/>
                },
                {
                    path:"usuario",
                    element: <ConfigUserPage/>
                },
                {
                    path:"users/:id/edit/",
                    element: <HomePage/>
                },
                {
                    path:"/users/:id/delete/",
                    element: <HomePage/>
                },
                {
                    path:"perfil",
                    element: <ProfilePage/>
                },
        ]
    },
    {
            element:<AuthLayout/>,
            children: [
                {
                    path: "login",
                    element: <AuthLayout />
                },
                {
                    path:"Forgot-password",
                    element: <h1 className="p-4">Recuperar mi contraseña</h1>
                },
                {
                    path:"reset-password",
                    element: <h1 className="p-4">Resetear mi contraseña</h1>
                },
                
        ]
    }
])

export default router;
