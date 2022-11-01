import React, { useState } from "react"



const ItemCount = ({ stock, onAdd, initial }) => {


   const [contador, setContador] = useState(initial);

   const sumar = () => {
      contador < stock && setContador(contador + 1)
   }

   const restar = () => {
      contador > initial && setContador(contador - 1)
   }

   const comprar = () => {
      setContador(initial)
      onAdd(contador)

   }

   const agregarCarrito = (contador) =>{
      onAdd(contador)
      setContador(1)

  }


   return (

      <>
         
         <div className="articulo">
            <article className="articuloConContador" >
               <section className="Contador">
                  <button onClick={sumar} className="css-button-3d--rose" >SUMAR</button>
                  <span>{contador}</span>
                  <button onClick={restar} className="css-button-3d--rose" >RESTAR</button>
               </section>
               <section className="comprador" >
                  <button onClick={comprar} className="en">ADD TO CART</button>
                  <button className="wishList" >  Wish List 🧡</button>
               </section>
            </article>
         </div>

      </>
   )
}

export default ItemCount;