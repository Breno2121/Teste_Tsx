'use client'

import { useState } from "react";
import "./home.css"
import Link from "next/link";

export default function Home() {
  // let contador = 0;
  const [contador, setContador] = useState<number>(0)


  function incrementar() {
    console.log("Foi executada")
    // contador = contador + 1;
    setContador(contador + 1)
    console.log(contador)
  }
  function decrementar() {
    console.log("Foi executada")
    // contador = contador + 1;
    if (contador > 0) {
      setContador(contador - 1)
      console.log(contador)
    }
  }
  function resetar() {
    // contador = 0;
    setContador(0)
    console.log("Foi resetado")
  }

  return (

    <div className="home-container">
      <h1>Contador: {contador}</h1>
      <button onClick={() => incrementar()}>INCREMENTAR</button>
      <button onClick={() => decrementar()}>DECREMENTAR</button>
      <button onClick={() => resetar()}>RESETAR</button>
     <h1>LOGIN</h1>
     <Link href="/login">
         <button>Tela Login</button>
     </Link>
 </div>

  );
}