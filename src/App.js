import React from "react";
import Navbar from "./Components/Navbar/Navbar"
import ItemListContainer from "./Components/ItemListContainer";
import { ItemCount } from "./ItemCount/index"
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";






const App = () => {
 
   
  const mensaje = "Hola!!! Bienvenidos a Italian Vaqueria"

  
  


  return (
      <> 
        <Navbar/>
        
         {/* <ItemListContainer /> */}
          {/* <ItemCount initial={1} stock={10} onAdd={() => {}}/> */}
          <ItemDetailContainer />
      </> 
   
    ) 

}

export default App  
