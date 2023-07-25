import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Persona } from '../Interfaces/IFormulario'
import { obtenerPersona, eliminarPersona } from '../Firebase/Promesas';

export const Eliminar = () => {
    const params = useParams()
    const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [edad, setEdad] = useState("")
  const [errorNombre, setErrorNombre] = useState("")
    const [idPersona,setIdPersona] = useState("")
  useEffect(()=>{
    if(params.idPersona!=undefined){
       obtenerPersona(params.idPersona).then((v)=>{
        if(v!=undefined && v.idPersona!= undefined){
            setNombre(v.nombre)
            setApellido(v.apellido)
            setEdad(""+v.edad)
            setIdPersona(v.idPersona)
        }
       })
    
    }
    //promesas que recuperan el objeto en base a un id
    //carguemos en cada estado su valor
  },[])
  
  
  const eliminar = ()=>{

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
    //eliminar
    eliminarPersona(idPersona).then(()=>{
        alert("Se elimino con exito")
    })
    //registrarPersona(p)
    console.log(nombre);
    console.log(apellido);
    console.log(edad);
    alert("Eliminado:  "+nombre+" "+apellido);
  }

  return (
    <form>
        <label className="form-label">Nombre: </label><br/>
        <input type="text" className="form-control"
          value={nombre}
          /><br/>
        <span>{errorNombre}</span><br/>
        <label className="form-label">Apellido: </label><br/>
        <input type="text" className="form-control"
          value={apellido}
        /><br/>
        
        <label className="form-label">Edad: </label><br/>
        <input type="number" className="form-control"
          value={edad}
          /><br/>

        <button type='button' className="btn btn-primary" onClick={eliminar}>Eliminar</button>
    </form>
  )
}
