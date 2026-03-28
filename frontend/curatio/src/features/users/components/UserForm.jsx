import { Button, Input, Select, CheckBox } from "@/shared/components";
// import selectService from "@/feaures/users/services/selectService"
import { useEffect, useState } from "react";
import { getDocumentTypes } from "../services/selectService";
import { AvatarUploader } from "@/features/users";
import { UserSchema } from "../schemas/UserSchema";

export default function UserForm() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    documentType: "",
    documentNumber: "",
    password: "",
    avatarUrl: null,
    //Flag Booleano para el checkbox
    isStaff: false,
    isActive: true,
    isSuperuser: false,

  });


//============================= HANDLERS ===================================
// HANDLER GENERAL PARA LOS INPUTS DEL FORMULARIO
// Función que se ejecuta cada vez que cambia el valor de un input del formulario 
const handleChange = (e) => { 
// Se obtiene el nombre del campo (name) y su valor actual (value) 
// desde el elemento que disparó el evento 
  const { name, value, checked, type } = e.target; 
// Se actualiza el estado del formulario 
// prev representa el estado anterior del formulario 
  setFormData((prev) => ({ 
// Se copian todos los valores anteriores del estado 
  ...prev, 
// Se actualiza únicamente el campo que cambió 
// [name] permite usar el nombre del input como clave dinámica 
  [name]: type === "checkbox" ? checked : value, 
}));  
};
// HANDLER GENERAL PARA LOS INPUTS DEL FORMULARIO


//Es la función que se ejecuta cuando se envía un documento
//============== HANDLE SUBMIT ============== 
// Función que se ejecuta cuando se envía el formulario 
const handleSubmit = (e) => { 
  // Evita que el formulario recargue la página 
  e.preventDefault(); 
  // Se valida el objeto formData usando el esquema definido con Zod 
  // safeParse devuelve un objeto indicando si la validación fue exitosa o no 
  const result = UserSchema.safeParse(formData); 
  // Si la validación falla 
  if (!result.success) { 
    // Objeto donde se almacenarán los errores por campo 
    const fieldErrors = {}; 
    // Zod devuelve los errores en un arreglo llamado issues 
    // Se recorren para asociar cada error a su campo correspondiente 
    result.error.issues.forEach((issue) => { 
    // issue.path contiene la ruta del campo que falló 
    const field = issue.path[0]; 
    // Se guarda el mensaje de error en el objeto fieldErrors 
    fieldErrors[field] = issue.message; 
    }); 
    // Se actualiza el estado de errores para mostrarlos en el formulario 
    setErrors(fieldErrors); 
    // Se detiene la ejecución porque el formulario tiene errores 
    return; 
    }
  // Si la validación es exitosa se limpian los errores anteriores 
  setErrors({}); 
  // result.data contiene los datos ya validados por Zod 
  console.log("Usuario válido:", result.data); 
  };


//============================= HANDLERS ===================================



// Estado para almacenar los errores de validación
  const [errors, setErrors] = useState({});


//Estado de los selects de documento para el formulario
  const [documentTypes, setDocumentTypes] = useState([]);
  useEffect(() => {
    getDocumentTypes().then(setDocumentTypes);
  }, []);
  // // const handleNameChange = (e) => {
  // // console.log(`Nombre del usuario: ${e.target.value} `)
  // // };
  // const handleEmailBlur = (e) => {
  //   console.log(`Email del usuario: ${e.target.value} `);
  // };
  // // Una validación básica
  // const handleNameChange = (e) => {
  //   console.log(`Nombre del usuario: ${e.target.value} `);
  //   if (e.target.value === "") {
  //     console.log(`Este campo No puede estar vacio`);
  //   }
  // };
  return (
    <div>
      {/* Formulario para crear el usuario */}
      <form
        onSubmit={handleSubmit}
        className="
px-6 py-12
grid grid-cols-2 gap-6
bg-white/50
dark:bg-neutral-800/20
backdrop-blur-sm
shadow-xl
ring-1
rounded-xl

"
      >
        <Input
          label="Nombre"
          type="text"
          name="name"
          placeholder="Ingrese su nombre"
          value={formData.name}
          onChange={handleChange}
          error = {errors.name}
        ></Input>

        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="Ingrese su email"
          value={formData.email}
          onChange={handleChange}
          error = {errors.email}
        ></Input>

        <Input
          label="Telefono"
          name="phone"
          type="tel"
          placeholder="Ingrese su numero de telefono"
          value={formData.phone}
          onChange={handleChange}
          error = {errors.phone}
        ></Input>

        <Select
          label="Tipos de documento"
          name="documentType"
          options={documentTypes}
          value={formData.documentType}
          onChange={handleChange}
          error = {errors.documentType}
        ></Select>

        <Input
          label="Número de documento"
          type="text"
          name="documentNumber"
          placeholder="Ingrese su número de documento"
          value={formData.documentNumber}
          onChange={handleChange}
          error = {errors.documentNumber}
        ></Input>

        <Input
          label="password"
          type="password"
          name="password"
          placeholder="Ingrese su contraseña"
          value={formData.password}
          onChange={handleChange}
          error = {errors.password}
        ></Input>

        <CheckBox
          id="isActive"
          name="isActive"
          label="Está activo"
          checked={formData.isActive}
          onChange={handleChange}>
        </CheckBox>

        <CheckBox
          id="isSuperuser"
          name="isSuperuser"
          label="Es super Usuario"
          checked={formData.isSuperuser}
          onChange={handleChange}>
        </CheckBox>

        <CheckBox
          id="isStaff"
          name="isStaff"
          label="Usuario Staff"
          checked={formData.isStaff}
          onChange={handleChange}>
        </CheckBox>


        <AvatarUploader
          onUpload={(url) =>
            setFormData((prev) => ({
              ...prev,
              avatarUrl: url,
              error: errors.avatarUrl
            }))
          }
        />

        {/* Actions */}
        <div className="flex items-center justify-center gap-12">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => console.log("Oprimió cancelar")}
          >
            Cancelar
          </Button>
          <Button
            variant="primary"
            size="md"
            type="submit"
            onClick={() => console.log("Oprimió guardar")}
          >
            Guardar
          </Button>
        </div>
      </form>
    </div>
  );
}