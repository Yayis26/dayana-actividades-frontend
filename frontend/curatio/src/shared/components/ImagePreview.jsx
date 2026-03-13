import { useEffect, useState } from "react";
/**
 * ImagePreview
 * Muestra una miniatura (avatar circular) a partir de un File del input.
 * Props:
 * - file: instancia de File (e.g., proveniente de <input type="file" />)
 */
export default function ImagePreview({ file }) {
  // Estado local para almacenar el object URL del File.
  const [url, setUrl] = useState(null);
  useEffect(() => {
    // Si no hay archivo, no hacemos nada y salimos.
    if (!file) return;
    // Crear un Object URL temporal para poder previsualizar el File en <img>.
    // Ventaja: no hay que leer el archivo con FileReader.

    const objectUrl = URL.createObjectURL(file);
    setUrl(objectUrl);
    // Cleanup: revocar el Object URL cuando:
    // - el componente se desmonte, o
    // - cambie 'file' (para evitar fugas de memoria).
    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);
  // UX: si no hay archivo, no renderizamos nada.
  if (!file) return null;
  return (
    <img
      src={url}
      alt="Preview"
      // h-32 w-32: tamaño fijo; rounded-full: avatar circular; object-cover: recorta para llenar el cuadro.
      className="h-32 w-32 rounded-full object-cover"
    />
  );
}
