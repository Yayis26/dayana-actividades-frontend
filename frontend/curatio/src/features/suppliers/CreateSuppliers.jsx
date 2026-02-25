//Creación de Formulario de Creación de Proveedores
import Input from "@/shared/components/Input";
import Button from "../../shared/components/Button";
import Select from "@/shared/components/Select";
// import selectService from "@/features/user/services/serviceSelect";
// import { getDocumentTypes } from "../users/services/selectService";
// import { useState, useEffect } from "react";

export default function CreateForm() {

  //   const[documentTypes, setDocumentTypes] = useState([])

  // useEffect (() =>{
  //     getDocumentTypes().then(setDocumentTypes);
  // },[]);

  const handleNameChange = (e) => {
    console.log("NIT del proveedor: ", e.target.value);
    if (e.target.value === "") {
      console.log("Este campo no puede estar vacío");
    }
  };
  const handleEmailBlur = (e) => {
    console.log("Correo electrónico del proveedor: ", e.target.value);
  };

  const handleButtonSubmit = (s) => {
    console.log("Subir: ", s.target.value);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-transparent p-8 rounded-lg w-[400px]">
        <h2 className="text-xl font-bold text-center mb-6">Datos básicos</h2>

        <div className="space-y-6 grid grid-cols-1" >
          <Input
            label="NIT: Ejemplo:80000000-0"
            placeholder="80000000-0"
            onChange={handleNameChange}
          />
          <Input label="Nombre del proveedor" placeholder="Juan Rivera" />
          <Input label="Razón social" placeholder="1234567890" />
          <Input label="Nombre de contacto" placeholder="Stiven Quintero" />
          <Input label="Teléfono de contacto" placeholder="30000000" />
          {/* <Select label="Tipos de documento" name = "documentType" options = {documentTypes}></Select> */}
          <Input
            label="Correo electrónico"
            placeholder="example@gmail.com"
            onBlur={handleEmailBlur}
          />
          <Input label="Dirección" placeholder="Barrio Dss Mz 44 Cs 88" />
        </div>

        {/* Actions buttons */}
        <div className="flex justify-center gap-4 mt-6">
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
            onSubmit={handleButtonSubmit}
          >
            Guardar
          </Button>
        </div>
      </div>
    </div>
  );
}
