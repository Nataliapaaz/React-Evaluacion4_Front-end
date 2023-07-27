import React from "react";
import Empanadas from "../Images/Empanadas.jpg"

export const Fotografiacomercial = () => {
  return (
    <>
      <h1 id="sec2" className="container-fluid text-center mediumh1">
        Fotografía comercial
      </h1>
      <p className="container-md text-center medium">
        Estas imágenes son parte de algunas sesiones de fotografía comercial que
        he realizado con mucho cariños y dedicación a lo largo de estos años.
        <br />
        Dentro de estos ejemplos hay varios tipos diferentes de fotografía;
        puede incluir el retrato, fotografía de alimentos y de matrimonio. Sin
        embargo también hago fotografía de productos y todo tipo de eventos.
      </p>
      <div className="text-center">
        <img src={Empanadas.src} width={"800px"}></img>
      </div>
      <br />
    </>
  );
};
