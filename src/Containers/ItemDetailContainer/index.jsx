import { useState, useEffect } from 'react';
import { customFetch } from '../../utils/customFetch';
import CircularProgress from '@mui/material/CircularProgress';
import ItemDetail from '../ItemDetail';
import { products } from '../../assets/productos';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {

  const [producto, setProducto] = useState({})

  const { id } = useParams();



  useEffect(() => {
    customFetch(products, 0, parseInt(id)).then((res) => setProducto(res))
  }, [id])

  console.log(producto)


  return (<>
    <ItemDetail producto={producto} />
  </>);
}

export default ItemDetailContainer;
