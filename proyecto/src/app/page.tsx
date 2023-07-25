'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { Saludo } from './Componentes/Saludo'
import { Formulario } from './Componentes/Formulario'
import {BrowserRouter} from 'react-router-dom'
import { Header } from './layout/Header'
import { AppRouter } from './router/AppRouter'
import { Footer } from './layout/Footer'
import Menu from './Componentes/Menu'
import 'bootstrap/dist/css/bootstrap.css';
export default function Home() {
  return (
    <>
      <BrowserRouter>
        <Menu></Menu>
        <br/>
        <Header/>
        <br/>
        <AppRouter/>
        <br/>
        <Footer/>
      </BrowserRouter>
      
    </>
  )
}
