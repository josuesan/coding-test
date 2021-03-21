const CarInsurance = require('./entities/CarInsurance');
const ProductFactory = require('./factories/ProductFactory');

const factory = new ProductFactory();

const productsAtDayZero = [
  factory.createProduct('Medium Coverage', 10, 20),
  // factory.createProduct('Full Coverage', 2, 0),
  // factory.createProduct('Low Coverage', 5, 7),
  // factory.createProduct('Mega Coverage', 0, 80),
  // factory.createProduct('Mega Coverage', -1, 80),
  // factory.createProduct('Special Full Coverage', 15, 20),
  // factory.createProduct('Special Full Coverage', 10, 49),
  // factory.createProduct('Special Full Coverage', 5, 49),
  // factory.createProduct('Super Sale', 3, 6),
];

const carInsurance = new CarInsurance(productsAtDayZero);

const productPrinter = function (product) {
  console.log(`${product.name}, ${product.sellIn}, ${product.price}`);
};

for (let i = 1; i <= 30; i += 1) {
  console.log(`Day ${i}`);
  console.log('name, sellIn, price');
  carInsurance.updatePrice().forEach(productPrinter);
  console.log('');
}
