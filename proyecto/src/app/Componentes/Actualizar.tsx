import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Persona } from "../Interfaces/IFormulario";
import {
  actualizarPersona,
  obtenerPersona,
  eliminarPersona,
} from "../Firebase/Promesas";

export const Actualizar = () => {
  const params = useParams();
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [edad, setEdad] = useState("");
  const [mail, setMail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [descrip, setDescrip] = useState("");
  const [cliente, setCliente] = useState("");
  const [errorNombre, setErrorNombre] = useState("");
  const [idPersona, setIdPersona] = useState("");
  useEffect(() => {
    if (params.idPersona != undefined) {
      obtenerPersona(params.idPersona).then((v) => {
        if (v != undefined && v.idPersona != undefined) {
          setNombre(v.nombre);
          setApellido(v.apellido);
          setEdad("" + v.edad);
          setMail(v.mail);
          setTelefono("" + v.telefono);
          setCantidad("" + v.cantidad);
          setDescrip(v.descrip);
          setCliente(v.cliente);
          setIdPersona(v.idPersona);
        }
      });
    }
    //promesas que recuperan el objeto en base a un id
    //carguemos en cada estado su valor
  }, []);

  const actualizar = () => {
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
    //actualizar
    actualizarPersona(idPersona, p).then(() => {
      alert("Se actualizo con exito");
    });
    //registrarPersona(p)
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
      <input type="text" className="form-control" onChange={(e) => setMail(e.target.value)} value={mail} />
      <br />

      {/* T E L E F O N O */}

      <label className="form-label">Numero de telefono: </label>
      <br />
      <input type="text" className="form-control" onChange={(e) => setTelefono(e.target.value)} value={telefono} />
      <br />

      {/* C A N T I D A D */}

      <label className="form-label">Cantidad de fotografías: </label>
      <br />
      <input type="text" className="form-control" 
     onChange={(e) => setCantidad(e.target.value)} value={cantidad} />
      <br />

      {/* D E S C R I P C I O N */}

      <label className="form-label">
        Descripción de lo que deseas en tu sesión:{" "}
      </label>
      <br />
      <input type="text" className="form-control" onChange={(e) => setDescrip(e.target.value)} value={descrip} />
      <br />

      {/* C L I E N T E */}

      <label className="form-check">Eres un cliente drecuente? : </label>
      <br />

      <input
        type="radio"
        className="form-check-input"
        id="si"
        name="cliente"
        onChange={(e) => setCliente(e.target.value)}
        value={cliente}
      />
      <label className="form-check-label" htmlFor="si">
        Si
      </label>

      <input
        type="radio"
        className="form-check-input"
        id="no"
        name="cliente"
        onChange={(e) => setCliente(e.target.value)}
        value={cliente}
      />
      <label className="form-check-label" htmlFor="no">
        No
      </label>
      <br />

      <button type="button" className="btn btn-primary" onClick={actualizar}>
        Actualizar
      </button>
    </form>
  );
};
