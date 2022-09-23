import "./ItemDetail.css"
const ItemDetail = ({producto}) => {
   
 return(
    <>
       <section className="espacio">
        <article className="cartaa">
            <picture className="image">
                <img src= {producto.image} alt="" />
            </picture>
            <figcaption>
                <div>
                    <h2>ID:{producto.id}</h2>
                    <h1>Price:{producto.price}</h1>
                </div>
                <p>{producto.description}</p>
                   <br />
                <button className="botondecompra">ADD TO CART</button>
            </figcaption>
        </article>
       </section>
    </>
 )

}

export { ItemDetail }