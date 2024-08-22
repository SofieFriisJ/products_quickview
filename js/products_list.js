import { fetchProducts } from "./fetch_data.js"
import { productListTmpl } from "./templates.js"





// Array med produkter
let products = await fetchProducts(); 



export function productsList(){
        
     
        let productListContainer = document.querySelector('.post-container')
        
        

        if(productListContainer) {


            products.forEach((product) => {
                productListContainer.insertAdjacentHTML('beforeend', productListTmpl(product));
            });


        }    





        
        
    }
