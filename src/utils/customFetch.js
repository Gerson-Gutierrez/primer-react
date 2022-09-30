export const customFetch = (listProducts, stallTime = 0, id) => {
    return new Promise((resolve, reject) => 
        setTimeout(() => {
            try {
                if (listProducts) {
                    if (id) {
                        const product = listProducts.find((ropa) => ropa.id == id);
                        resolve(product);
                    } else {
                        resolve(listProducts);
                    }
                }
            } catch (err) {
                reject(err);
            }

        }, stallTime),
    );
};




// export const customFetch = (products) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//          resolve(products)
//         }, 2000)
//     })
// } 