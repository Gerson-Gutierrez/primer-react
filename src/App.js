import React from "react";
import Navbar from "./Components/Navbar/Navbar"
import ItemListContainer from "./Containers/ItemListContainer/ItemListContainer";



const App = () =>{
 
   
  const mensaje = "Hola!!! Bienvenidos a Italian Vaqueria"
  


  return (
      <>
        <Navbar/>
        
        <ItemListContainer greeting= {mensaje}/>
      </>
   
    ) 

}

export default App  
