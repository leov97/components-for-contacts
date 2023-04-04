import { Fragment, useState } from "react";
import React from "react";
import ComponenteB from "./componenteB";
import perfil from "./perfil.jpg"

const ComponenteA = () =>{

    const [contacto, setcontacto] =useState({

    nombre:"Ronny",
    apellido:"Portillo",
    email:"juanito97@gmail.com",
    online:false,  
    imagen: perfil

    })
      
return(
    <Fragment>
    
        <ComponenteB 
        contacto={contacto} 
        setcontacto={setcontacto}

        />
    </Fragment>
)
}


export default ComponenteA