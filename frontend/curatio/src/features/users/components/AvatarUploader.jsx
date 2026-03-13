import { useState } from "react";
import { FileInput } from "@/shared/components";
import { ImagePreview } from "@/shared/components";
/**
* AvatarUploader
* Orquesta: selección del archivo, previsualización y "subida" (simulada).
* Props:
* - onUpload: (url: string) => void -> callback con la URL final del
avatar.
*/
export default function AvatarUploader({ onUpload }) {
  // Estado del archivo actualmente seleccionado desde FileInput.
  const [file, setFile] = useState(null);
  // Bandera de carga mientras se "sube" el archivo.
  const [loading, setLoading] = useState(false);

  // Maneja la acción de subir (aquí simulada con setTimeout).
  const handleUpload = () => {
    // Si no hay archivo, no hace nada (botón ya está deshabilitado, esto es defensa extra).
    if (!file) return;
    setLoading(true);
    // Simula una petición asíncrona (ej. POST a tu backend / S3 presigned URL).
    setTimeout(() => {
      // Para demo: construimos una URL "fake" con timestamp + nombre original.
      const url = `https://ricoprogramr.com/${Date.now()}-${file.name}`;
      setLoading(false);
      // Notifica hacia arriba que ya hay URL final (para guardar en perfil,etc).
      onUpload(url);
    }, 1200);
  };
  return (
    <div className="space-y-4">
      {/* Selector de archivo con filtro de tipos */}
      <FileInput
        label="Foto de perfil"
        accept="image/png, image/jpeg"
        onChange={setFile}
      />
      {/* Vista previa (avatar circular) si hay archivo */}
      <ImagePreview file={file} />
      {/* Botón de subir: deshabilitado si no hay archivo o si está cargando
       */}
      <button
        onClick={handleUpload}
        disabled={!file || loading}
        className="rounded-lg bg-indigo-600 px-4 py-2 text-white
disabled:opacity-50 hover:bg-indigo-800"
      >
        {loading ? "Subiendo..." : "Subir"}
      </button>
    </div>
  );
}