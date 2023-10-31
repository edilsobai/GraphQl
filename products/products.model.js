const products = [
  {
    id: "redshoe",
    description: "Red Shoes",
    price: 42.12,
    reviews: []
  },
  {
    id: "bluejean",
    description: "Blue Jeans",
    price: 55.55,
    reviews: []
  }
]

function getAllProducts() {
  return products
}

function getProductsByPrice(min, max) {
  return products.filter((product) => product.price >= min && product.price <= max)
}

function getProductById(id) {
  return products.find((product)=> product.id === id)
  
}

function addNewProduct(id, description, price){
  const newProduct = {
    id,
    description,
    price,
    reviews: []
  }
  products.push(newProduct)
  return newProduct
}

function addNewProductReview(id, rating, comment){
  const matchedProduct = getProductById(id)
  const newProductReview = {
    rating, 
    comment
  }
  matchedProduct.reviews.push(newProductReview)

  return newProductReview
  // const newReview = {
  //   rating,
  //   comment
  // }
  // const productId = products.find((product) => product.id === id )
  // productId.reviews.push(newReview)
  // console.log(productId)
  // return productId
}
module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductById,
  addNewProduct,
  addNewProductReview
}