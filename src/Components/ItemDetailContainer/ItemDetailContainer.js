import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import { useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail'  
import { products } from "../../assets/productos"
import { useEffect ,useState } from 'react';
import { customFetch } from '../../utils/customFetch';

const ItemDetailContainer = () => {
    const [ropa, setRopa] = useState({})
    const [loading, setLoading]= useState(true)
    
    const { id } = useParams();
    

    useEffect(() => {
      customFetch (products, 1200, parseInt(id))
     .then((res) => setRopa(res));
    }, [id]);
    
    return (

      <>
        
        {
          loading
         ? <CircularProgress />
         : <ItemDetail ropa={ropa} / >

        }
     
      </>

  )


}; 


export default ItemDetailContainer









       //  const getItem = async () => {
       //    try{ 
       //      const res = await fetch ("https://fakestoreapi.com/products/1");
       //      const data = await res.json();
       //      setProducto(data);
       //     }
       
       
       //     catch(err){
       //       console.error("un error: ".err);
       //     }
       //     finally{
       //       setLoading(false)
       //     }
        
        
       //   }
            
       //  getItem();