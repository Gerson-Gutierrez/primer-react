import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import CartItem from "../../Components/CartItem";
import { Link } from "react-router-dom";





const CartContainer = () => {
    const { Cart, removeItem, total, clear } = useContext(CartContext)


    return (
        <>
            {Cart.length === 0 ? (
                <section className="cart-empty container " >
                    <h1>SHOPPING CART</h1>
                    <article className="message_link flex-column " >
                        <h2>Your cart is empty!</h2>
                        <Link to="/" >
                            <h3>Continue shopping ›</h3>
                        </Link>
                    </article>
                </section>
            ) : (
                <>

                    <>

                        <section className="cart-full container " >
                            <h1>SHOPPING CART</h1>
                            <section className="cart flex-row " >
                                <article className="cart_left" >
                                    {
                                        Cart.map((item) => (
                                            <CartItem item={item} removeItem={removeItem} key={item.item.id} />
                                        ))
                                    }
                                </article>
                                <article className="cart_right">
                                    <div className="checkout-top">
                                        <div className="subtotal  ">
                                            Subtotal:
                                            <span className="total">${total.toFixed(2)}</span>
                                        </div>
                                        <Link className="c" to="/Form" >
                                            <button  className="comprar" >PROCEED TO CHECKOUT » </button>
                                        </Link>
                                        <button onClick={clear} className="clear">CLEAR CART</button>
                                    </div>
                                </article>
                            </section>
                        </section>

                    </>
                </>
            )}

        </>
    );
}

export default CartContainer;


