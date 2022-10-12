import { useState, useEffect } from 'react';
import { customFetch } from '../../utils/customFetch';
import CircularProgress from '@mui/material/CircularProgress';
import ItemDetail from '../ItemDetail';
import { products } from '../../assets/productos';
import { useParams } from 'react-router-dom';
import { database } from '../../firebase/firebase';
import { getDoc, collection, doc } from 'firebase/firestore';

const ItemDetailContainer = () => {

  const [producto, setProducto] = useState({})

  const { id } = useParams();



  useEffect(() => {
    const productCollection = collection(database, "products");
    const refDoc = doc(productCollection, id)
    getDoc(refDoc)
      .then((result) => {
        setProducto(
        {
          id: result.id,
          ...result.data()
        }
        )
      })



    // customFetch(products, 0, parseInt(id)).then((res) => setProducto(res))
  }, [id])








  console.log(producto)


  return (<>
    <ItemDetail producto={producto} />
  </>);
}

export default ItemDetailContainer;
