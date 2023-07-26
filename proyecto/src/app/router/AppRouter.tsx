'use client'
import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { Saludo } from '../Componentes/Saludo'
import { Formulario } from '../Componentes/Formulario'
import { Registros } from '../Componentes/Registros';
import { Actualizar } from '../Componentes/Actualizar'
import { Eliminar } from '../Componentes/Eliminar'
import { Acercade } from '../Componentes/AcercaDe'
import { Fotografiacomercial } from '../Componentes/Fotografiacomercial'
import { Fotografiaartistica } from '../Componentes/fotografiaartistica'
import { Fotografiaestenopeica } from '../Componentes/Fotografiaestenopeica'
export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/*' element={<Saludo nombre={"JNatalia"}/>}/>
        <Route path='/acercade' element={<Acercade/>}/>
        <Route path='/fotografiacomercial' element={<Fotografiacomercial/>}/>
        <Route path='/fotografiaartistica' element={<Fotografiaartistica/>}/>
        <Route path='/fotografiaestenopeica' element={<Fotografiaestenopeica/>}/>
        <Route path='/formulario' element={<Formulario/>}/>
        <Route path='/mostrar' element={<Registros/>}/>
        <Route path='/actualizar/:idPersona' element={<Actualizar/>}/>
        <Route path='/eliminar/:idPersona' element={<Eliminar/>}/>
    </Routes>
  )
}
