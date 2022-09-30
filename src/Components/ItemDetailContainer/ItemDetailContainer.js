import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail'  
import { products } from "../../assets/productos"
import { useEffect ,useState } from 'react';
import { customFetch } from '../../utils/customFetch';


const ItemDetailContainer = () => {
    const [ropa, setRopa] = useState({})
    
    
    const { id } = useParams();
    

    useEffect(() => {
      customFetch (products, 100, parseInt(id))
     .then((res) => setRopa(res));
    }, [id]);

    console.log(ropa);

    
    return (

      <>        
          
          <ItemDetail ropa={ropa} / >

      </>

    );


}; 

export default ItemDetailContainer