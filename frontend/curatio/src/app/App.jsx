//Se comenta para que no entre en conflicto con el CreateUserPage, que es el que se va a mostrar en la pagina de crear usuario
//import UserForm from "../features/users/components/UserForm";
import { RouterProvider } from "react-router-dom";
import router from "@/app/router"
//import { UserForm } from "@/features/users";

export default function App() {

return(

    <RouterProvider router={router}/>
       
);
};
// export default function App() {

//      return(
//          <div className="grid grid-cols-1 gap-6  justify-items-center">
//              <h1 className="text-tittles font-bold text-center text-label">
//                  Crear Usuario             
//              </h1>

//              <div className="">
//                  <UserForm />
//                  {/* <CreateUserPage/> */}
//                  {/* <DeleteCounter /> */}
//                  {/* <DeleteUseEffect /> */}
//                  {/* <Select/> */}
//              </div>
//          </div>
//      );
// }