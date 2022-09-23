import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import { ItemDetail } from './ItemDetail'  
import { useEffect ,useState } from 'react';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [loading, setLoading]= useState(true)


    useEffect(() => {
    
       const getItem = async () => {
         try{ 
           const res = await fetch ("https://fakestoreapi.com/products/1");
           const data = await res.json();
           setProducto(data);
          }


          catch(err){
            console.error("un error: ".err);
          }
          finally{
            setLoading(false)
          }
       
       
        }
           
       getItem();


    }, [])
  
    return (

      <>
        
        {
         loading
         ? <CircularProgress />
         : <ItemDetail producto={producto} / >

        }
     
      </>

    )


}
export default ItemDetailContainer
