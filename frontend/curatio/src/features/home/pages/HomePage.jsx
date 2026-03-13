import heroBg from "@/assets/images/imagen-hero.jpg"
import { products } from "../../../data/products/products";
import { Section, User } from "lucide-react"
//import { UserForm } from "../../users/components/UserForm.jsx"
import { UserForm } from "@/features/users";
import { Card } from "@/shared/components";
import { FileInput } from "../../../shared/components";


export default function HomePage(){

    // /*Encontrar car por id*/
    // const product = products.find(p => p.id === 1)

    return(
        <section
            className="relative min-h-screen w-full flex items-center justify-center text-black"
            style={{
                backgroundImage: `url(${heroBg})`, 
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

            <div className="relative z-10 flex flex-col items-center justify-center gap-10">
                <h1 className="text-h1 font-heading ">
                    Curatio productos 
                </h1>


                <div className="
                grid
                gap-8
                sm:grid-cols-2
                lg:grid-cols-3
                xl:grid-cols-4
                justify-items-centercenter">

                {products.map((product) =>(<Card key = {product.id} product={product}/>))}

                {/* Renderiza ina card por id
                product && <Card product = {product}/> */}


                </div>

            </div>

        </section>
    )
}