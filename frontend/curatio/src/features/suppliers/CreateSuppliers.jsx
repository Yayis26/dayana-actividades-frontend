import Input from "@/shared/components/Input";
import Button from "@/shared/components/Button";

import Select from "@/shared/components/Select";
// import selectService from "@/feaures/users/services/selectService"
import { useEffect, useState } from "react";
import { getDocumentTypes } from "../users/services/selectService";
import { AvatarUploader } from "@/features/users";

export default function UserForm() {
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [documentTypes, setDocumentTypes] = useState([]);
  useEffect(() => {
    getDocumentTypes().then(setDocumentTypes);
  }, []);
  // const handleNameChange = (e) => {
  // console.log(`Nombre del usuario: ${e.target.value} `)
  // };
  const handleEmailBlur = (e) => {
    console.log(`Email del usuario: ${e.target.value} `);
  };
  // Una validación básica
  const handleNameChange = (e) => {
    console.log(`Nombre del usuario: ${e.target.value} `);
    if (e.target.value === "") {
      console.log(`Este campo No puede estar vacio`);
    }
  };
  return (
    <div>
      {/* Formulario para crear el usuario */}
      <form
        className="
px-6 py-12
grid grid-cols-1 gap-6
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
          placeholder="Ingrese su nombre"
          onChange={handleNameChange}
        ></Input>
        <Input
          label="Email"
          placeholder="Ingrese su nombre"
          onBlur={handleEmailBlur}
        ></Input>
        <AvatarUploader onUpload={setAvatarUrl} />
        {avatarUrl && (
          <p className="mt-4 text-sm text-gray-600">
            URL guardada: {avatarUrl}
          </p>
        )}
        <Select
          label="Tipos de documento"
          name="documentType"
          options={documentTypes}
        ></Select>
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