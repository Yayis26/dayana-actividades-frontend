import { useId } from "react";
/**
 * Componente FileInput
 * Props:
 * - label: texto de la etiqueta asociada al input
 * - accept: cadenas MIME/extensiones permitidas (ej. "image/*,.pdf")
 * - onChange: callback que recibe un File (el primero seleccionado)
 */
export default function FileInput({ label, accept, onChange }) {
  // useId genera un id único, estable entre renders y seguro para SSR/hydration (React 18+).
  const id = useId();
  return (
    <div className="space-y-2">
      {/* label accesible enlazado al input por htmlFor/id */}
      <label htmlFor={id} className="block text-sm font-medium text-gray-600">
        {label}
      </label>
      <input
        id={id}
        type="file"
        // 'accept' limita qué tipos de archivo puede seleccionar el usuario(a nivel de UI).
        accept={accept}
        // Pasamos solo el primer archivo seleccionado al callback.
        // Nota: si el input no tiene 'multiple', files[0] es suficiente.
        onChange={(e) => onChange(e.target.files[0])}
        // Estilos con Tailwind: personaliza el botón "file" nativo.
        className="block w-full text-sm text-gray-600
file:mr-4 file:rounded-lg file:border-0
file:bg-indigo-600 file:px-4 file:py-2
file:text-white"
      />
    </div>
  );
}
