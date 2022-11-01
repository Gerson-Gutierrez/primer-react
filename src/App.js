import NavBar from "./Components/Navbar/NavBar";
import ItemListContainer from "./Containers/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Containers/ItemDetailContainer";
import { BrowserRouter,Routes,Route, } from "react-router-dom";
import CartProvider from "./Context/CartContext";
import CartContainer from "./Containers/CartContainer"
import Form from "./Components/Form";

const App = () =>{
  const onAdd =(contador)=>{
    
  }
  onAdd()

  return(
    <>
    <BrowserRouter>
    <CartProvider>
     <NavBar />
     <main>
     <Routes>
      <Route path="/" element={<ItemListContainer/>}  />
      <Route path="/categoria/:IdCategoria" element={<ItemListContainer/>} />
      <Route path="/product/:id" element={<ItemDetailContainer/>} />
      <Route path="/cart" element={<CartContainer/>}/>
      <Route path="/Form" element={<Form/>}/>
      </Routes> 
     </main>
    </CartProvider>
    </BrowserRouter>
    </>
  )
}

export default App;


 