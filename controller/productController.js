const productService = require("../service/productService");

module.exports.createProduct = async (req,res) => {
    let response = {};
    const responseData = await productService.createProduct(req.body);  
    response.status = 200;
    response.message = "OK";
    response.body = responseData;
    return res.status(response.status).send(response);
}

module.exports.getAllProducts = async (req,res) => {
    let response = {};
    const responseData = await productService.getAllProducts(req.body);  
    response.status = 200;
    response.message = "OK";
    response.body = responseData;
    return res.status(response.status).send(response);
}

module.exports.getProductById = async (req,res) => {
    let response = {};
    const responseData = await productService.getProductById(req.params);  
    response.status = 200;
    response.message = "OK";
    response.body = responseData;
    return res.status(response.status).send(response);
}