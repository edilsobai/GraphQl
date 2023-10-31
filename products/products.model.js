const products = [
  {
    id: "redshoe",
    description: "Red Shoes",
    price: 42.12
  },
  {
    id: "bluejean",
    description: "Blue Jeans",
    price: 55.55
  }
]

function getAllProducts() {
  return products
}

function getProductsByPrice(min, max) {
  return products.filter((product) => product.price >= min && product.price <= max)
}

module.exports = {
  getAllProducts,
  getProductsByPrice
}