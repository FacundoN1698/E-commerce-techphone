class ProductManager {
    constructor(title, description, price, thumbnail, code, stock) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
    }
    static products = []

    //-------------Metodo para generar un id incremental-------------

    idNumerico = () => ProductManager.products.length + 1;

    //-------------Agrego un producto-------------

    addProducts(product) {
        if (product.title !== ""
            && product.description !== ""
            && product.price > 0
            && product.thumbnail !== ""
            && product.code > 0
            && product.stock > 0
        ) {
            if ((ProductManager.products.some(num => num.code == product.code)) !== true) {
                product.id = this.idNumerico()
                ProductManager.products.push(product)
                console.log(`producto agragado ${product.title}, su id es:"${product.id}"`);
                console.log(`total de productos: ${ProductManager.products.length}`);
            } else {
                console.log("este producto ya fue agregado");
            }
        } else {
            console.log("Todos los campos son obligatorios");
        }
    }

    //-------------Devuelvo todos los productos guardados-------------

    getProducts = () => {
        let allProducts = ProductManager.products.map(products => products.title)
        return console.log(`estos son todos los productos agregados: ${allProducts}`);
    }

    //-------------Busco un producto por su id-------------

    getProductById(id) {
        let product = ProductManager.products.find(product => product.id === id)
        if (product) {
            return console.log(product.title);
        } else {
            console.log("Not found");
        }
    }
}

let productos = new ProductManager()

productos.addProducts({
    title: "Apple iPhone 14",
    description: "Celular gama Alta, con 3 camara ",
    price: 426999,
    thumbnail: "https://www.ventasrosario.com.ar/wp-content/uploads/2022/09/61cwywLZR-L._AC_SL1500_.jpg",
    code: 787,
    stock: 2
})

productos.addProducts({
    title: "Samsung s23 Ultra",
    description: "Celular Samsung gama Alta",
    price: 450999,
    thumbnail: "https://amateurphotographer.com/wp-content/uploads/sites/7/2023/02/samsung_galaxy_s23ultra_Amy_Davies_003.jpg?w=900",
    code: 187,
    stock: 9
})

productos.addProducts({
    title: "Nike air force 1",
    description: "zapatilla nike air",
    price: 550,
    thumbnail: "https://nikearprod.vtexassets.com/arquivos/ids/501935/DQ7658_100_C_PREM.jpg?v=638151745598330000",
    code: 1787,
    stock: 88
})

productos.getProductById(2)

productos.getProducts()