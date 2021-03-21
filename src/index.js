const FactoryProduct = require('./factories/ProductFactory');

const factoryProduct = new FactoryProduct();
const product = factoryProduct.createProduct('Full Coverage', 2, 0);
console.log(typeof product);
