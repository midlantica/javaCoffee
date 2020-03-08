import { ProductHtml } from './Product.js'
import { useProducts } from './ProductDataProvider.js'

const contentTarget = document.querySelector('.productsContent')
export const ProductList = () => {
  const ProductItems = useProducts()

  for (const productItem of ProductItems) {
    contentTarget.innerHTML += ProductHtml(productItem)
  }
}
