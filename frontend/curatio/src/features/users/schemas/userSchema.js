import {z} from "zod";

export const UserSchema = z.object({
    name: z.string()
        .min(3, "El nombre de tener mínimo 3 caracteres")
        .max(60, "El nombre es demasiado largo"),
    
    email: z
        .string()
        .email("Debe ingresar un email válido"),

    phone: z 
        .string()
        .regex(/^[0-9]{10}$/, "El teléfono debe tener 10 digitos"),

    documentType: z
        .string()
        .min(1, "Debe seleccionar un tipo de documento"),

    documentNumber: z
        .string()
        .min(5, "Numero de documento invalido")
        .max(20, "Numero de documento demasiado largo"), 

    password: z
    .string()
    .min(8, "Contraseña debe tener mínimo 8 carácteres")
    .regex(/[A-Z]/, "Debe contener al menos una mayúscula")
    .regex(/[a-z]/, "Debe contener al menos una minúscula")
    .regex(/[0-9]/, "Debe contener al menos un número")
    .regex(/[^A-Za-a0-9]/, "Debe contener al menos un caracter especial"),

    avatarUrl: z
    .string()
    .url("La URL del avatar no es válida" )
    .nullable()
    .optional()

        

    
})