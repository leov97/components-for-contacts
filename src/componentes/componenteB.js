    import React from "react";
    import  "./style.css"

const ComponenteB = ({contacto, setcontacto}) => {

    
    const actualizarconexion = ()=>{
        const nuevoestado = {...contacto, online: contacto.online? false : true }
        setcontacto(nuevoestado)
        console.log(nuevoestado)
    }

    return(
        <div className="perfil" >
            <img src= "https://via.placeholder.com/64" />
            <div  className="state" style={{backgroundColor: contacto.online ? "green" : "red"}} ></div>

            <div  className="contactos">
            <h4> Nombre: {contacto.nombre}</h4>
            <h4> Apellido: {contacto.apellido}</h4>
            <h4> Email: {contacto.email}</h4>
          
            </div>
              <input type="submit" value={contacto.online ? "Conectado" : "Desconectado"} onClick={actualizarconexion}/>

            
        </div>
    )
   
}
  
export default ComponenteB