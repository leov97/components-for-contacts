import { Fragment, useState } from "react";
import React from "react";
import ComponenteB from "./componenteB";
import perfil from "./perfil.jpg"

const ComponenteA = () =>{

    const [contacto, setcontacto] =useState({

    nombre:"juan",
    apellido:"portillo",
    email:"juanito97@gmail.com",
    online:false,  
    imagen: "https://via.placeholder.com/64"

    })
      
return(
    <Fragment>
        <h1> CONTACTO</h1>
        <ComponenteB 
        contacto={contacto} 
        setcontacto={setcontacto}

        />
    </Fragment>
)
}


export default ComponenteA