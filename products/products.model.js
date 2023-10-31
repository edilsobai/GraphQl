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
  
  return newProduct
}
module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductById,
  addNewProduct
}