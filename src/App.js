import React from "react";
import Navbar from "./Components/Navbar/Navbar"
import ItemListContainer from "./Components/ItemListContainer";
import { ItemCount } from "./ItemCount/index"





const App = () => {
 
   
  const mensaje = "Hola!!! Bienvenidos a Italian Vaqueria"

  
  


  return (
      <>
        <Navbar/>
          <ItemListContainer/> 
        {/* <ItemCount initial={1} stock={10} onAdd={() => {}}/> */}
       
      </> 
   
    ) 

}

export default App  
