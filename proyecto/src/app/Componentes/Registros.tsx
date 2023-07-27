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
                    <td>{p.nombre}</td>
                    <td>{p.apellido}</td>
                    <td>{p.edad}</td>
                    <td>{p.mail}</td>
                    <td>{p.telefono}</td>
                    <td>{p.cantidad}</td>
                    <td>{p.descrip}</td>
                    <td>{p.cliente}</td>
                    <td><Link to={"/actualizar/"+p.idPersona} className="btn btn-primary">Actualizar</Link></td>
                    <td><Link to={"/eliminar/"+p.idPersona} className="btn btn-primary">Eliminar</Link></td>
                </tr>
        })
        return r
    }

    return (
    <table className="table table-striped">
        <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Edad</th>
            <th>Mail</th>
            <th>Telefono</th>
            <th>Cantidad</th>
            <th>Descripción</th>
            <th>Cliente</th>
            <th>Editar</th>
            <th>Eliminar</th>
        </tr>
        {
            renderizarDatos()
        }
    </table>
  )
}
