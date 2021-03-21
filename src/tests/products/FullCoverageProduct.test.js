const FactoryProduct = require('../../factories/ProductFactory');

describe('Full Coverage Product', () => {
  const factoryProduct = new FactoryProduct();

  test('should return the price grather when past a day and the product is not expired', () => {
    const product = factoryProduct.createProduct('Full Coverage', 2, 0);
    product.updatePrice();
    expect(product.sellIn).toBe(1);
    expect(product.price).toBe(1);
  });

  test('should return the price grather by two when past a day and the product is expired', () => {
    const product = factoryProduct.createProduct('Full Coverage', 0, 0);
    product.updatePrice();
    expect(product.sellIn).toBe(-1);
    expect(product.price).toBe(2);
  });

  test('should throw a error if a product is created with the price less than 0', () => {
    expect(() => factoryProduct.createProduct('Full Coverage', 2, -5)).toThrow('The product price never is less than 0.')
  });

  test('should throw a error if a product is created with the price grather than 50', () => {
    expect(() => factoryProduct.createProduct('Full Coverage', 2, 51)).toThrow('The product price never is grather than 50.')
  });

  test('should return the product with the sellIn decremented and the price equal, when the product has already reached the maximun price ', () => {
    const product = factoryProduct.createProduct('Full Coverage', 10, 50);
    product.updatePrice();
    expect(product.sellIn).toBe(9);
    expect(product.price).toBe(50);
  });

  test('should return the product with the sellIn decremented and the price equal, when the product has already reached the maximun price and sellIn is expired', () => {
    const product = factoryProduct.createProduct('Full Coverage', 0, 50);
    product.updatePrice();
    expect(product.sellIn).toBe(-1);
    expect(product.price).toBe(50);
  });

});
