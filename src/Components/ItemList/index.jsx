import { Item } from "../Item"
const ItemList = ({ listProducts }) => {
   
 return(
    <>
       {listProducts.map((ropa, i) => <Item key={`${ropa.product}-${i}`} product={ropa} />)}
    </>
 )

}

export { ItemList }