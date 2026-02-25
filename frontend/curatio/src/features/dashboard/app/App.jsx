//Se comenta para que no entre en conflicto con el CreateUserPage, que es el que se va a mostrar en la pagina de crear usuario
//import UserForm from "../features/users/components/UserForm";
// import DeleteCounter from "../shared/components/DeleteCounter";
import DeleteUseEffect from "../../../shared/components/DeleteUseEffect";
// import DeleteUserEffect from  "@/shared/components/DeleteUseEffect";
import Select from "@/shared/components/Select";
import CreateForm from "../../suppliers/CreateSuppliers";

export default function App() {
  return (
    <div className="grid grid-cols-1 gap-6  justify-items-center">
      <h1 className="text-3xl font-bold text-center text-label">
        Curatio Farmacia
      </h1>

      <div>
        {/* <UserFormm />  
        <CreateUserPage/>
        <DeleteCounter/> */}
        {/* <DeleteUseEffect /> */}
        {/* <Select/> */}
        <CreateForm/>
      </div>
    </div>
  );
}
