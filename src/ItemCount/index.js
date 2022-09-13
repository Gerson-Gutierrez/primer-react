import React, {useState} from "react";
import "./itemCount.css"


const ItemCount = ({ initial, stock, onAdd}) => {

     const [count, setCount] = useState(initial);

     const increase = () => {
        setCount (count + 1);   
     }

     const decrease = () => {
        setCount (count -1);
     }

     const reset = () => {
        setCount(0);
      
      }

    

    return (
       <>  
           <div className="Count">
             <div>itemCount</div>       
            <h1>{count}</h1>
            <buttons> 
               <button disabled={count >= stock } onClick={increase}>+</button>
               <button disabled={count <=1} onClick={decrease}>-</button>
            </buttons>
             <button className="agregar" onClick={reset}>agregar al carrito</button>
            </div> 
         </>
      )

}

export default ItemCount;