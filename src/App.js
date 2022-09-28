import React from "react";
import Navbar from "./Components/Navbar/Navbar"
import ItemListContainer from "./Components/ItemListContainer";
import { ItemCount } from "./ItemCount/index"
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import { Routes, Route } from "react-router-dom";


 



const App = () => {
 
   
  const mensaje = "Hola!!! Bienvenidos a Italian Vaqueria"

  
  


  return (
      <> 
          

            <Navbar/>
          <Routes>
             
            <Route path='/' element={<ItemListContainer />} /> 
            <Route path='/ItemDetail' element={<ItemDetailContainer/>} />
               
          </Routes>   
          
      </> 
   
   ) 
   
}

export default App  






{/* <ItemCount initial={1} stock={10} onAdd={() => {}}/> */}