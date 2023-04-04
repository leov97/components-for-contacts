    import React from "react";
    import  "./style.css"
    import { useCallback } from "react";
    import perfil from "./perfil.jpg"

const ComponenteB = ({contacto, setcontacto}) => {

    
    const actualizarconexion = useCallback(()=>{
        const nuevoestado = {...contacto, online: contacto.online? false : true }
        setcontacto(nuevoestado)
        console.log(nuevoestado)
    },[setcontacto, contacto]) 

    return(


        <div className="perfil" >


            <img src= {perfil} />
            <div  className="state" style={{backgroundColor: contacto.online ? "green" : "red"}} ></div>

            

            <div  className="contactos">
            <h4> {contacto.nombre} {contacto.apellido} </h4>
            <h4> {contacto.email}</h4>
          
            </div>
           <div className="container">
            <div className="form-check form-switch" id="check-status">
                 <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={actualizarconexion}  />

            </div>
            </div>
        </div>
    )
   
}
  
export default ComponenteB