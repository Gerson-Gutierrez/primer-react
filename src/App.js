import React from "react";
import Navbar from "./Components/Navbar/Navbar"
import ItemListContainer from "./Containers/ItemListContainer/ItemListContainer";
import ItemCount from "./ItemCount/index"




const App = () => {
 
   
  const mensaje = "Hola!!! Bienvenidos a Italian Vaqueria"
  
  


  return (
      <>
        <Navbar/>
        <ItemListContainer greeting= {mensaje}/>
        {/* <ItemCount initial={1} stock={6} onAdd={onAdd} /> */}
        <ItemCount initial={1} stock={10} onAdd={() => {}}/>
      </>
   
    ) 

}

export default App  
