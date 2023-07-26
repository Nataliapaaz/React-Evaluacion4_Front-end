"use client";
import React, { useEffect, useState } from "react";
import { Persona } from "../Interfaces/IFormulario";
import { registrarPersona } from "../Firebase/Promesas";

export const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [edad, setEdad] = useState("");
  const [errorNombre, setErrorNombre] = useState("");
  const [mail, setMail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [descrip, setDescrip] = useState("");
  const [cliente, setCliente] = useState("");

  const registrar = () => {
    if (nombre.trim() == "") {
      setErrorNombre("No valen espacios en blanco");
    } else {
      setNombre(nombre.trim());
    }

    //Asuman que se valido todo
    const p: Persona = {
      nombre,
      apellido,
      edad: parseInt(edad),
      mail,
      telefono: parseInt(edad),
      cantidad: parseInt(edad),
      descrip,
      cliente,
    };
    registrarPersona(p);
    console.log(nombre);
    console.log(apellido);
    console.log(edad);
    console.log(mail);
    console.log(telefono);
    console.log(cantidad);
    console.log(descrip);
    console.log(cliente);
    alert("Bienvenido " + nombre + " " + apellido);
  };
  const validarNombre = (valor: string) => {
    setNombre(valor);
    if (valor.length < 3) {
      setErrorNombre("Debe tener mas de 3 letras");
    } else {
      setErrorNombre("");
    }
  };
  return (
    <div className="container-lg text-center">
      <form className="mb-3 text-bg-dark  row g-3">
        <label className="form-label">Nombre: </label>
        <br />
        <input
          type="text"
          className="form-control"
          onChange={(e) => validarNombre(e.target.value)}
          value={nombre}
        />
        <br />
        <span>{errorNombre}</span>
        <br />

        <label className="form-label">Apellido: </label>
        <br />
        <input
          type="text"
          className="form-control"
          onChange={(e) => setApellido(e.target.value)}
          value={apellido}
        />
        <br />

        <label className="form-label">Edad: </label>
        <br />
        <input
          type="number"
          className="form-control"
          onChange={(e) => setEdad(e.target.value)}
          value={edad}
        />
        <br />

        <label className="form-label">E-mail: </label>
        <br />
        <input
          type="email"
          className="form-control"
          onChange={(e) => setMail(e.target.value)}
          value={mail}
        />
        <br />

        <label className="form-label">telefono: </label>
        <br />
        <input
          type="tel"
          className="form-control"
          onChange={(e) => setTelefono(e.target.value)}
          value={telefono}
        />
        <br />

        <label className="form-label">Cantidad de fotos que deseas: </label>
        <br />
        <input
          type="number"
          className="form-control"
          min="1"
          max="400" 
          onChange={(e) => setCantidad(e.target.value)}
          value={cantidad}
        />
        <br />

        <label className="form-label">Describe el tipo de sesión que quieres: </label>
        <br />
        <input
          type="textarea"
          className="form-control"
          onChange={(e) => setDescrip(e.target.value)}
          value={descrip}
        />
        <br />

        <fieldset className="form-check">Eres un cliente drecuente? : </fieldset>
        <br />


        <input type="radio" className="form-check-input" id="si" name="cliente"
          onChange={(e) => setCliente(e.target.value)}
          value={cliente}/>
        <label className="form-check-label" for="si">Si</label>

        <input type="radio" className="form-check-input" id="no" name="cliente"
          onChange={(e) => setCliente(e.target.value)}
          value={cliente}/>
        <label className="form-check-label" for="no">No</label>
        <br />

        <div className="container-md">
          <button type="button" className="btn btn-primary" onClick={registrar}>
            Registrar
          </button>
        </div>
        </form>
    </div>
  );
};
