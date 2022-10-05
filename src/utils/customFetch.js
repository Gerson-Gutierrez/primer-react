export const customFetch = (products, stallTime = 0, id) => {
    return new Promise((resolve, reject) => 
        setTimeout(() => {
            try {
                if (products) {
                    if (id) {
                        const item = products.find((producto) => producto.id == id);
                        resolve(item);
                    } else {
                        resolve(products);
                    }
                }
            } 
            catch (err) {
                reject(err);
            }

        }, stallTime),
    );
};




