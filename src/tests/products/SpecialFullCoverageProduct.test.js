const FactoryProduct = require('../../factories/ProductFactory');

describe('Special Full Coverage Product', () => {
  const factoryProduct = new FactoryProduct();

  test('should return the price grather when past a day and sellIn is grather to 10', () => {
    const product = factoryProduct.createProduct('Special Full Coverage', 15, 20);
    product.updatePrice();
    expect(product.sellIn).toBe(14);
    expect(product.price).toBe(21);
  });

  test('should return the price grather when past a day and sellIn is in range [6,10]', () => {
    const product = factoryProduct.createProduct('Special Full Coverage', 10, 20);
    product.updatePrice();
    expect(product.sellIn).toBe(9);
    expect(product.price).toBe(22);
  });

  test('should return the price grather when past a day and sellIn is in range [0,5]', () => {
    const product = factoryProduct.createProduct('Special Full Coverage', 5, 20);
    product.updatePrice();
    expect(product.sellIn).toBe(4);
    expect(product.price).toBe(23);
  });

  test('should return the price 0 when past a day and sellIn is less than 0', () => {
    const product = factoryProduct.createProduct('Special Full Coverage', 0, 20);
    product.updatePrice();
    expect(product.sellIn).toBe(-1);
    expect(product.price).toBe(0);
  });

  test('should throw a error if a product is created with the price less than 0', () => {
    expect(() => factoryProduct.createProduct('Special Full Coverage', 0, -20)).toThrow('The product price never is less than 0.')
  });

  test('should throw a error if a product is created with the price grather than 50', () => {
    expect(() => factoryProduct.createProduct('Special Full Coverage', 0, 51)).toThrow('The product price never is grather than 50.')
  });

  test('should return the product with the sellIn decremented and the price equal, when the product has already reached the maximun price ', () => {
    const product = factoryProduct.createProduct('Special Full Coverage', 10, 50);
    product.updatePrice();
    expect(product.sellIn).toBe(9);
    expect(product.price).toBe(50);
  });

});
