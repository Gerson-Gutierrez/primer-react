import { useState } from "react"
import "./ItemDetail.css"

const ItemDetail = ({ ropa }) => {
   
 return(
    <>
   
        <section className="espacio">
        <article className="cartaa">
            <picture className="image">
                <img src= {ropa.image} alt="" />
            </picture>
            <figcaption>
                <div>
                    <h2>ID:{ropa.id}</h2>
                    <h1>Price:{ropa.price}</h1>
                </div>
                <p>{ropa.product}</p>
                   <br />
                <button className="botondecompra">ADD TO CART</button>
            </figcaption>
        </article>
       </section> 
    </>
 )

}

export { ItemDetail }




