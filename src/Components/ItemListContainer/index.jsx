import React from 'react'
import { Link } from 'react-router-dom'
import { ItemList } from "../ItemList"; 
import { products } from "../../assets/productos";
import { customFetch } from "../../utils/customFetch";
import { useState, useEffect } from "react";
// import '../Item/item.css'
import './fff.css'


import CircularProgress from '@mui/material/CircularProgress';


const ItemListContainer = ({greeting}) => {


  const [listProducts, setListProducts] = useState ([])
  const [loading, setLoading]= useState(true)

  useEffect(() => {
      customFetch(products, 1200)
       .then(res => {
        setListProducts(res)
        setLoading(false)

       }
        
        )
  }, [])
  
   
  return (   
    <>
       <h1>{greeting}</h1>
       {
        loading ?
        <CircularProgress />
        :

        <div className='flex itemlistcontainer '>

          <ItemList listProducts={listProducts} />
           
        </div>
       }
    </>
  )
}

export default ItemListContainer