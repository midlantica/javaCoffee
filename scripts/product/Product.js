export const ProductHtml = productsObject => {
  return `
    <div class="panel">
      <h6>${productsObject.name}</h6>
      <p>Bean Type: ${productsObject.beanType}</p>
      <p>Roast Type: ${productsObject.roastType}</p>
      <p>Price: ${productsObject.price}</p>
    </div>
  `
}