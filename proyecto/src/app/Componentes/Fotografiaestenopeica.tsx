import React from "react";
import Pos from "../Images/09pos.jpg"

export const Fotografiaestenopeica = () => {
  return (
    <>
      <h1 id="sec4" className="container-fluid text-center mediumh1">Fotografía estenopeica</h1>
  <p className="container-md text-center medium">La fotografía estenopeica es una técnica fotográfica que utiliza una cámara oscura simple y sin lente, en la que la luz pasa a través de un pequeño agujero llamado estenopo. La luz que entra a través del estenopo crea una imagen invertida en la superficie opuesta de la cámara, que puede ser una placa fotográfica o una película.
  <br/>
  Esta técnica fue descubierta en la antigüedad, pero fue popularizada en el siglo XIX por los fotógrafos pioneros como William Henry Fox Talbot y Louis Daguerre. La importancia de la fotografía estenopeica en la historia de la fotografía radica en que fue la técnica precursora de la fotografía moderna, y permitió a los fotógrafos experimentar con la creación de imágenes utilizando la luz y la cámara oscura.
  <br/>
  Las fotos que van a ver a continuación son parte de un proyecto artístico llamado Copiapó Estenopeico que consistió en fotografiar lugares de Copiapó en donde el tiempo parece haberse detenido, resultando en una suerte de atemporalidad en las fotos captadas. También son lugares que, a mi parecer, reflejan muy bien la esencia de la ciudad de Copiapó. 
  <b>Todas estas fotografías fueron tomadas con cámaras estenopeicas fabricadas a mano por mi misma.

  </b>
  </p>
  <div className="text-center">
        <img src={Pos.src} width={"800px"}></img>
    </div>
    </>
  );
};
