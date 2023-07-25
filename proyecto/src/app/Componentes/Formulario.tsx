'use client'
import React, { useEffect, useState } from 'react'
import { Persona } from '../Interfaces/IFormulario'
import { registrarPersona } from '../Firebase/Promesas'

export const Formulario = () => {
  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [edad, setEdad] = useState("")
  const [errorNombre, setErrorNombre] = useState("")

  
  
  const registrar = ()=>{

    if(nombre.trim()==""){
      setErrorNombre("No valen espacios en blanco")
    }else{
      setNombre(nombre.trim())
    }

    //Asuman que se valido todo
    const p:Persona = {
        nombre,
        apellido,
        edad:parseInt(edad)
    }
    registrarPersona(p)
    console.log(nombre);
    console.log(apellido);
    console.log(edad);
    alert("Bienvenido "+nombre+" "+apellido);
  }
  const validarNombre = (valor:string)=>{
    setNombre(valor);
    if(valor.length<3){
      setErrorNombre("Debe tener mas de 3 letras")
    }
    else{
      setErrorNombre("")
    }


  }
  return (
    <div className="container-lg text-center">
    <form className="mb-3 text-bg-dark  row g-3">
        <label className="form-label">Nombre: </label><br/>
        <input type="text" className="form-control"
          onChange={(e)=>validarNombre(e.target.value)}
          value={nombre}
          /><br/>
        <span>{errorNombre}</span><br/>
        <label className="form-label">Apellido: </label><br/>
        <input type="text" className="form-control"
          onChange={(e)=>setApellido(e.target.value)}
          value={apellido}
        /><br/>
        
        <label className="form-label">Edad: </label><br/>
        <input type="number" className="form-control"
          onChange={(e)=>setEdad(e.target.value)}
          value={edad}
          /><br/>
        <div className="container-md">
          <button type='button' className="btn btn-primary" onClick={registrar}>Registrar</button>
        </div>
    </form>
    </div>
  )
}
