export async function getDocumentTypes(){
    const response = await fetch("/src/data/selects/documentTypes.json");

    return response.json();

}; //Servicio que empezó con un verbo de obtener los datos de la ruta y retornar la respuesta 