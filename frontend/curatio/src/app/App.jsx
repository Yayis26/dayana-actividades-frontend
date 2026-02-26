//Se comenta para que no entre en conflicto con el CreateUserPage, que es el que se va a mostrar en la pagina de crear usuario
//import UserForm from "../features/users/components/UserForm";
import { RouterProvider } from "react-router-dom";
import router from "@/app/router"

export default function App() {

    return(

        <RouterProvider router={router}/>
       
    );
};