// useEffect
/**
 * useEffect es un hook que permite ejecutar efectos secundarios en componentes funcionales
 *
 * Un efecto secundario es cualquier operación que:
 * 1- Ocurre fuera del render
 * 2-Interactua con el mundo exterior al componente
 * Ejemplos
 * -Llamadas APIs
 * -Manipulación de DOM
 * -Actualizar un título del navegador
 *
 *
 * =====SINTAXIS========
 * useEffect(()=> {
 *      efecto *          -Código que se ejecuta
 * }), [];                -En los corchetes se colocan el arreglo de dependencias
 *
 *  */

// import { useState, useEffect } from "react";

// ====== Efecto con array vacío =======
// function DeleteUseEffect (){

//     const [message, setMessage] = useState("Cargando...")

//     useEffect(()=>{
//         setTimeout(() => {
//             setMessage("componente montado")
//         }, 3000);
//     }),[];

//     return(
//         <h1>{message}</h1>

//     );

// };

// export default DeleteUseEffect;
/**
 * Hook useEffect con una dependencia
 * Entender que useEffect se vuelve a ejecutar cuando cambia una dependencia
 * -useEffect puede ejecutarse otra vez si algo cambia
 * -Ese algo se declara en el array de dependencias
 *  */

import { useEffect, useState } from "react";

function DeleteUserEffect() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("El contador no ha cambiado");

  useEffect(() => {
    setMessage(`El contador cambió a' ${count}`);
  }, [count]);

  return (
    <>
      <h2>{count}</h2>
      <p> {message}</p>
      <button
        className="border border-border p-2"
        onClick={() => setCount(count + 1)}
      >
        Incrementar
      </button>
    </>
  );
}
export default DeleteUserEffect;

/**
 * IMPORTANTE
 * -Si una dependencia cambia el efectu se ejecuta
 * -Si no cambia no se ejecuta 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */