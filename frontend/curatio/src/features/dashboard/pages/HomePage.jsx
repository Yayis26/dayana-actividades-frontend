import heroBg from "@/assets/images/10-imagen-hero.jpg"
import { Section } from "lucide-react"

export default function HomePage(){

    return(
        <section
            className="relative min-h-screen w-full flex items-center justify-center text-black"
            style={{
                backgroundImage: `url(${heroBg})`, 
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative z-10 text-center text-white">
                <h1 className="text-h1 font-heading ">
                    Bienvenido al SENA 
                </h1>
                <p>
                    Aprende según tus gustos, desde panadería hasta control numérico
                </p>
            </div>

        </section>
    )
}
