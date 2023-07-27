import React from "react";
import Cielo from "../Images/Cielo.jpg"

const imgc = require('../Images/Cielo.jpg');

export const Fotografiaartistica = () => {
  return (
    <>
      <h1 id="sec3" className="container-fluid text-center mediumh1">
        Fotografía artistica
      </h1>
      <p className="container-md text-center medium">
        Estas son algunas de las fotografías que he sacado en momentos donde he
        sentido la necesidad de transmitir algo que no puede ser dicho por
        palabras y que forman parte de mi portafolio artístico.
      </p>
      <br />
      <img src={Cielo}></img>

    </>
  );
};
