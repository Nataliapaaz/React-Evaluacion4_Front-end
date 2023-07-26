'use client'
import React from 'react'
import { Link } from 'react-router-dom'
export const Header = () => {
  return (
    <ul className="nav justify-content-center p-3 mb-2 bg-body-secondary">
      <li className="nav-item">
        <Link className="nav-link active" to={"/"}>Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active" to={"/formulario"}>Formulario</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active" to={"/mostrar"}>Registros</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active" to={"/acercade"}>Acerca de</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active" to={"/fotografiacomercial"}>Fotografia Comercial</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active" to={"/fotografiaartistica"}>Fotografia Artistica</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active" to={"/fotografiaestenopeica"}>Fotografia Estenopeica</Link>
      </li>
    </ul>
  )
}
