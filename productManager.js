const fs = require('fs')

class ProductManager {
  constructor(filePath) {
    this.path = filePath
  }

  addProduct(product) {
    const products = this.getProducts()

    const id = products.length > 0 ? products[products.length - 1].id + 1 : 1

    product.id = id
    products.push(product)

    this.saveProducts(products)

    return product
  }

  getProducts() {
    try {
      const data = fs.readFileSync(this.path, 'utf8')
      const products = JSON.parse(data)

      return products
    } catch (error) {
      return []
    }
  }

  getProductById(id) {
    const products = this.getProducts()

    const product = products.find((p) => p.id === id)

    return product
  }

  updateProduct(id, updatedFields) {
    const products = this.getProducts()

    const product = products.find((p) => p.id === id)

    if (product) {
      Object.assign(product, updatedFields)

      this.saveProducts(products)

      return product
    }

    return null
  }

  deleteProduct(id) {
    const products = this.getProducts()

    const updatedProducts = products.filter((p) => p.id !== id)

    this.saveProducts(updatedProducts)

    return updatedProducts
  }

  saveProducts(products) {
    const data = JSON.stringify(products, null, 2)

    fs.writeFileSync(this.path, data)
  }
}

module.exports = ProductManager
