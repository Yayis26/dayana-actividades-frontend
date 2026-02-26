import Navbar from "@/shared/layout/Navbar.jsx";
import { Outlet } from "react-router-dom";
import heroBg from "@/assets/images/10-imagen-hero.jpg"

export default function MainLayout(){

        return(
            <div className="relative min-h-screen">
                <div className="absolute inset-0 -z-10 bg-cover bg-center"

                    style={{backgroundImage: `url(${heroBg})`}}>
                </div>

                {/* Navbar*/}
                <header className="-z-20">
                    <Navbar/>;
                </header>
                
                <main className="mx-auto max-w7 px-4 py-6">
                    <Outlet />
                </main>
            </div>

        );
};
