const ProductManager = require('./productManager')

const productManager = new ProductManager('products.json')

// Agregar un producto
const newProduct = {
  title: 'Nuevo Producto',
  description: 'Descripción del nuevo producto',
  price: 24.99,
  thumbnail: 'ruta/de/imagen.jpg',
  code: 'PROD004',
  stock: 15
}

const addedProduct = productManager.addProduct(newProduct)
console.log('Producto agregado:', addedProduct)

// Obtener todos los productos
const allProducts = productManager.getProducts()
console.log('Todos los productos:', allProducts)

// Obtener un producto por su ID
const productId = 2
const productById = productManager.getProductById(productId)
console.log(`Producto con ID ${productId}:`, productById)

// Actualizar un producto
const productToUpdate = {
  price: 29.99,
  stock: 20
}

const updatedProduct = productManager.updateProduct(productId)
