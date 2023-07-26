import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Persona } from "../Interfaces/IFormulario";
import { obtenerPersona, eliminarPersona } from "../Firebase/Promesas";

export const Eliminar = () => {
  const params = useParams();
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [edad, setEdad] = useState("");
  const [mail, setMail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [descrip, setDescrip] = useState("");
  const [cliente, setCliente] = useState("");
  const [idPersona, setIdPersona] = useState("");
  const [errorNombre, setErrorNombre] = useState("");
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
  }, [params.idPersona]);

  const eliminar = () => {
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
    //eliminar
    eliminarPersona(idPersona).then(() => {
      alert("Se elimino con exito");
    });
  };

  return (
    <form className="mb-3 text-bg-dark  row g-3">

      {/* N O M B R E */}

      <label className="form-label">Nombre: </label>
      <br />
      <input type="text" className="form-control" value={nombre} />
      <br />
      <span>{errorNombre}</span>
      <br />

      {/* A P E L L I D O */}

      <label className="form-label">Apellido: </label>
      <br />
      <input type="text" className="form-control" value={apellido} />
      <br />

      {/* E D A D */}

      <label className="form-label">Edad: </label>
      <br />
      <input type="number" className="form-control" value={edad} />
      <br />

      {/* M A I L */}

      <label className="form-label">E-mail: </label>
      <br />
      <input type="text" className="form-control" value={mail} />
      <br />

      {/* T E L E F O N O */}

      <label className="form-label">Numero de telefono: </label>
      <br />
      <input type="text" className="form-control" value={telefono} />
      <br />

      {/* C A N T I D A D */}

      <label className="form-label">Cantidad de fotografías: </label>
      <br />
      <input type="text" className="form-control" value={cantidad} />
      <br />

      {/* D E S C R I P C I O N */}

      <label className="form-label">Descripción de lo que deseas en tu sesión: </label>
      <br />
      <input type="text" className="form-control" value={descrip} />
      <br />

      {/* C L I E N T E */}

      <label className="form-label">Es un cliente frecuente? : </label>
      <br />
      <input type="text" className="form-control" value={cliente} />
      <br />

      <button type="button" className="btn btn-primary" onClick={eliminar}>
        Eliminar
      </button>
    </form>
  );
};
