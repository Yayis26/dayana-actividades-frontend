import Navbar from "@/layouts/Navbar.jsx";
import { Outlet, useLocation } from "react-router-dom";
// import heroBg from "@/assets/images/10-imagen-hero.jpg"

export default function MainLayout(){
/**
 * useLocation
 * Hook de React Router que te da acceso al objeto location, el cual contiene información de la URL actual: 
 * pathname = la ruta actual(/about. etc) 
 */
    const location = useLocation();

    const isHome = location.pathname === "/"

        return(
            //Navbar transparente solo en el home 
            //Si la ruta es exactamente / => es transparente
            //Si es cualquier otra ruta es solido 

            <div className="min-h-screen text-text-primary">
                
                {/* Navbar*/}
                
                <Navbar variant= {isHome ? "transparent" :"solid" }/>
    
                {/*Contenido externo que se inyecta*/}
                <main className="mx-auto max-w7">
                    <Outlet />
                </main>
            </div>

        );
};
