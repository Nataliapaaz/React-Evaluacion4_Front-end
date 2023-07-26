import React, { useEffect, useState } from 'react'
import { obtenerPersonas } from '../Firebase/Promesas'
import { Persona } from '../Interfaces/IFormulario'
import { Link } from 'react-router-dom'

export const Registros = () => {
    const [personas, setPersonas] = useState<Persona[]>([])
    useEffect(()=>{
        obtenerPersonas().then((listado)=>{
            console.log("Ya estoy listo")
            console.log(listado)
            setPersonas(listado)
        })
       
    },[])

    const renderizarDatos = ()=>{
        var r = personas.map((p)=>{
            return <tr>
                    <td scope="row">{p.nombre}</td>
                    <td scope="row">{p.apellido}</td>
                    <td scope="row">{p.edad}</td>
                    <td scope="row">{p.mail}</td>
                    <td scope="row">{p.telefono}</td>
                    <td scope="row">{p.cantidad}</td>
                    <td scope="row">{p.descrip}</td>
                    <td scope="row">{p.cliente}</td>
                    <td><Link to={"/actualizar/"+p.idPersona} className="btn btn-primary">Actualizar</Link></td>
                    <td><Link to={"/eliminar/"+p.idPersona} className="btn btn-primary">Eliminar</Link></td>
                </tr>
        })
        return r
    }

    return (
    <table className="table table-striped">
        <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Edad</th>
            <th scope="col">Mail</th>
            <th scope="col">Telefono</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Descripción</th>
            <th scope="col">Cliente</th>
            <th scope="col">Editar</th>
            <th scope="col">Eliminar</th>
        </tr>
        {
            renderizarDatos()
        }
    </table>
  )
}
