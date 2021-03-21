const fs = require('fs');
const CarInsurance = require('./entities/CarInsurance');
const ProductFactory = require('./factories/ProductFactory');

const writeStream = fs.createWriteStream('./after-30-days.txt');
const factory = new ProductFactory();

const productsAtDayZero = [
  // factory.createProduct('Medium Coverage', 1, 2),
  factory.createProduct('Medium Coverage', 10, 20),
  factory.createProduct('Full Coverage', 2, 0),
  factory.createProduct('Low Coverage', 5, 7),
  factory.createProduct('Mega Coverage', 0, 80),
  factory.createProduct('Mega Coverage', -1, 80),
  factory.createProduct('Special Full Coverage', 15, 20),
  factory.createProduct('Special Full Coverage', 10, 49),
  factory.createProduct('Special Full Coverage', 5, 49),
  factory.createProduct('Super Sale', 3, 6),
];

const carInsurance = new CarInsurance(productsAtDayZero);

const productPrinter = function (product) {
  console.log(`${product.name}, ${product.sellIn}, ${product.price}`);
  writeStream.write(`${product.name}, ${product.sellIn}, ${product.price}\r\n`);
};
const printInitialData = () => {
  console.log('Day 0');
  writeStream.write('Day 0\r\n');
  console.log('name, sellIn, price');
  writeStream.write('name, sellIn, price\r\n');
  carInsurance.products.forEach(productPrinter);
  console.log('');
  writeStream.write('\r\n');
};
// Print the initial status AKA Day 0
printInitialData();

for (let i = 1; i <= 30; i += 1) {
  console.log(`Day ${i}`);
  writeStream.write(`Day ${i}\r\n`);
  console.log('name, sellIn, price');
  writeStream.write('name, sellIn, price\r\n');
  carInsurance.updatePrice().forEach(productPrinter);
  console.log('');
  writeStream.write('\r\n');
}
writeStream.on('finish', () => {
  console.log('***************************** ADITIONAL INFORMATION *****************************');
  console.log('');
  console.log('An after-30-days.txt file has been created with the 30 days report, if you want to see it in a file instead of the console.');
  console.log('This file is located at the root of the directory and is self-generated in each execution. ');
});
writeStream.end();
