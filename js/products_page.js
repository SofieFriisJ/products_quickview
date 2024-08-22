import { fetchProducts } from "./fetch_data.js";
import { productPageTmpl, productQuickTmpl } from "./templates.js";


let products = await fetchProducts();

export function productsPage(){

    const productsPageContainer = document.querySelector('.product-page-container')

    if(productsPageContainer){
    
            let search = location.search;
            console.log(search)

            let productID = new URLSearchParams(search).get('id');
            console.log(productID)


            let findProduct = products.find( product => product.id == productID)
            console.log(findProduct)

            productsPageContainer.insertAdjacentHTML('beforeend', productPageTmpl(findProduct))

    }


}



export function productsQuickview(){

    const productsQuickviewContainer = document.querySelector('.product-quickview-container')
    const btnQuickview = document.querySelectorAll('.btnQuickview')



    if(productsQuickviewContainer){
    
        btnQuickview.forEach(btn => {
            btn.addEventListener('click', (e) => {

                let productID = e.target.id;
                console.log(productID)

                let findProduct = products.find( product => product.id == productID)
                console.log(findProduct)
                
                productsQuickviewContainer.innerHTML = ""
                productsQuickviewContainer.insertAdjacentHTML('beforeend', productQuickTmpl(findProduct))

            })
        })


    }


}

