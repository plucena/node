const Product = require("../models/productModel")

module.exports.createProduct =async (serviceData) => {
 let product = new Product({...serviceData});
 return await product.save();
}

module.exports.getAllProducts =async (serviceData) => {
    let products = await Product.find();
    return products;
}

module.exports.getProductById =async ({ id }) => {
    let products = await Product.findById(id);
    return products;
}
