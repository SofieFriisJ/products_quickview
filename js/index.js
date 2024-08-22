import { productsList } from "./products_list.js"
import { productsPage, productsQuickview } from "./products_page.js"
const app = {}

app.init = async () => {

    productsList()
    productsPage()
    productsQuickview()

}


app.init()