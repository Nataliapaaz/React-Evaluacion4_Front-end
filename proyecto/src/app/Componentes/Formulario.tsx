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
      telefono: parseInt(telefono),
      cantidad: parseInt(cantidad),
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
    //Acá generamos el formulario
    <div className="container-lg text-center">
      <form className="mb-3 text-bg-dark  row g-3">
        {/* N O M B R E */}
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

        {/* A P E L L I D O */}

        <label className="form-label">Apellido: </label>
        <br />
        <input
          type="text"
          className="form-control"
          onChange={(e) => setApellido(e.target.value)}
          value={apellido}
        />
        <br />

        {/* E D A D */}

        <label className="form-label">Edad: </label>
        <br />
        <input
          type="number"
          className="form-control"
          onChange={(e) => setEdad(e.target.value)}
          value={edad}
        />
        <br />

        {/* M A I L */}

        <label className="form-label">E-mail: </label>
        <br />
        <input
          type="email"
          className="form-control"
          onChange={(e) => setMail(e.target.value)}
          value={mail}
        />
        <br />

        {/* T E L E F O N O */}

        <label className="form-label">telefono: </label>
        <br />
        <input
          type="tel"
          className="form-control"
          onChange={(e) => setTelefono(e.target.value)}
          value={telefono}
        />
        <br />

        {/* C A N T I D A D */}

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

        {/* D E S C R I P C I O N */}

        <label className="form-label">
          Describe el tipo de sesión que quieres:{" "}
        </label>
        <br />
        <input
          type="textarea"
          className="form-control"
          onChange={(e) => setDescrip(e.target.value)}
          value={descrip}
        />
        <br />

        {/* C L I E N T E */}

        <label className="form-check">Eres un cliente drecuente? : </label>
        <br />

        <input
          type="radio"
          className="form-check-input"
          id="si"
          name="cliente"
          checked={cliente === "si"}
          onChange={(e) => setCliente(e.target.value)}
          value="Si"
        />
        <label className="form-check-label" htmlFor="si">
          Si
        </label>

        <input
          type="radio"
          className="form-check-input"
          id="no"
          name="cliente"
          checked={cliente === "no"}
          onChange={(e) => setCliente(e.target.value)}
          value="no"
        />
        <label className="form-check-label" htmlFor="no">
          No
        </label>
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
