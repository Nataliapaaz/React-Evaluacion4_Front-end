import React from 'react'
interface Props{
    nombre:string|number,
    apellido?:string,
}

export const Saludo = (props:Props) => {
  return (
    <div>
      <h1 className="text-center">Bienvenido</h1>
    </div>
  )
}