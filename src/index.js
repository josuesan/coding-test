const FactoryProduct = require('./factories/ProductFactory');

const factoryProduct = new FactoryProduct();
const product = factoryProduct.createProduct('Full Coverage', 'saf', 0);
console.log(product);
