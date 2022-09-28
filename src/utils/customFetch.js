export const customFetch = (products, stallTime = 0, id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
          try{
              if (products){
                if(id){
                    const product = products.find((ropa) => ropa.id ==id)
                    resolve(product);
                } else{
                    resolve(products)
                }
              }  
            } catch (err){
                reject(err);
            }

        }, stallTime)
    })
} 




// export const customFetch = (products) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//          resolve(products)
//         }, 2000)
//     })
// } 