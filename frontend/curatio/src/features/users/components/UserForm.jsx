import Input from "../../../shared/components/Input";

export default function UserForm() {
  return (
    <div>
      {/*Formulario para crear el usuario REALIZADO POR JHONIER G */}

      <form className="
        px-6 py-12 
        grid grid-cols-1 
        gap-6
        bg-white/70
        dark:bg-neutral-900/30
        backdrop-blur-md
        shadow-xl
        ring-1
        rounded-3xl
      
        ">
        {/*DATOS BASICOS */}
        <Input
          label="Nombre y Apellidos"
          placeholder="Juan Rivera Grisales"
          name="fullNames"
          >

        </Input>

        <Input
          label="Numero de documento"
          placeholder="123456789"
          type="number"
          name="documentNumber">
        </Input>

        {/*DATOS DE CONTACTO*/}
        <Input
          label="Direccion"
          placeholder="Calle 123 #45-67"
          name="address">
        </Input>

        <Input
          label="Numero de telefono"
          placeholder="123456789"
          type="number"
          name="phoneNumber">
        </Input>

        <Input
          label="Correo electronico"
          placeholder="juan@ejemplo.com"
          type="email"
          name="email">
        </Input>

        <Input
          label="Confirmar correo electronico"
          placeholder="juan@ejemplo.com"
          type="email"
          name="confirmEmail">
        </Input>




      </form>
    </div>
  );
}
