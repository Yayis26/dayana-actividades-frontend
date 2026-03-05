import {createBrowserRouter} from "react-router-dom"
import MainLayout from "@/layouts/MainLayout"
import ProfilePage from "../../features/users/pages/ProfilePage";
import HomePage from "../../features/dashboard/pages/HomePage";
import AuthLayout from "@/layouts/AuthLayout";

const router = createBrowserRouter([
    {
            element:<MainLayout/>,
            children: [
                {
                    path: "/",
                    element: <HomePage/>
                },
                {
                    path:"cursos",
                    element: <h1 className="p-4">Cursos</h1>
                },
                {
                    path:"contacto",
                    element: <h1 className="p-4">Contacto</h1>
                },
                {
                    path:"video",
                    element: <h1 className="p-4">Videos</h1>
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
