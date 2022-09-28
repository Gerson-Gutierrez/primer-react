import "./ItemDetail.css"
const ItemDetail = ({ products }) => {
   
 return(
    <>
        <section className="espacio">
        <article className="cartaa">
            <picture className="image">
                <img src= {products.image} alt="" />
            </picture>
            <figcaption>
                <div>
                    <h2>ID:{products.id}</h2>
                    <h1>Price:{products.price}</h1>
                </div>
                <p>{products.product}</p>
                   <br />
                <button className="botondecompra">ADD TO CART</button>
            </figcaption>
        </article>
       </section> 
    </>
 )

}

export { ItemDetail }