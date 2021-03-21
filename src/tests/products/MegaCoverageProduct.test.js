const FactoryProduct = require('../../factories/ProductFactory');

describe('Mega Coverage Product', () => {
  const factoryProduct = new FactoryProduct();

  test('should return the price 80 when past a day and the product is not expired', () => {
    const product = factoryProduct.createProduct('Mega Coverage', 1, 80);
    product.updatePrice();
    expect(product.sellIn).toBe(1);
    expect(product.price).toBe(80);
  });

  test('should return the price 80 when past a day and the product is expired', () => {
    const product = factoryProduct.createProduct('Mega Coverage', 0, 80);
    product.updatePrice();
    expect(product.sellIn).toBe(0);
    expect(product.price).toBe(80);
  });

  test('should throw a error if a product is created with the price less than 80', () => {
    expect(() => factoryProduct.createProduct('Mega Coverage', 0, -80)).toThrow('The product price never is less than 80.')
  });

  test('should throw a error if a product is created with the price grather than 80', () => {
    expect(() => factoryProduct.createProduct('Mega Coverage', 0, 100)).toThrow('The product price never is grather than 80.')
  });

});