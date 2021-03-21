const FactoryProduct = require('../../factories/ProductFactory');

describe('Medium Coverage Product', () => {
  const factoryProduct = new FactoryProduct();

  test('should return the price lower when past a day and the product is not expired', () => {
    const product = factoryProduct.createProduct('Medium Coverage', 10, 20);
    product.updatePrice();
    expect(product.sellIn).toBe(9);
    expect(product.price).toBe(19);
  });

  test('should return the price lower by two when past a day and the product is expired', () => {
    const product = factoryProduct.createProduct('Medium Coverage', 0, 20);
    product.updatePrice();
    expect(product.sellIn).toBe(-1);
    expect(product.price).toBe(18);
  });

  test('should throw a error if a product is created with the price less than 0', () => {
    expect(() => factoryProduct.createProduct('Medium Coverage', 10, -20)).toThrow('The product price never is less than 0.')
  });

  test('should throw a error if a product is created with the price grather than 50', () => {
    expect(() => factoryProduct.createProduct('Medium Coverage', 0, 100)).toThrow('The product price never is grather than 50.')
  });

});
