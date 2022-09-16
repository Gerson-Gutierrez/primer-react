import "./item.css"

const Item = ({ product }) => {

  return (
    <>
      <section className="cart" >
        <article className="cartMain">
          <img  src={product.image} alt="" />
          <div className="info" >
            <span>{product.product}
            <br />
            <span>{product.category}</span>
            </span>
            <span>${product.price}</span>
          </div>

        </article>
      </section>
    </>
  )

}

export { Item }