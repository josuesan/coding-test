const FactoryProduct = require('../../factories/ProductFactory');

describe('Super Sale Product', () => {
  const factoryProduct = new FactoryProduct();

  test('should return the price lower by two when past a day and the product is not expired', () => {
    const product = factoryProduct.createProduct('Super Sale', 3, 6);
    product.updatePrice();
    expect(product.sellIn).toBe(2);
    expect(product.price).toBe(4);
  });

  test('should return the price lower by four when past a day and the product is expired', () => {
    const product = factoryProduct.createProduct('Super Sale', 0, 7);
    product.updatePrice();
    expect(product.sellIn).toBe(-1);
    expect(product.price).toBe(3);
  });

  test('should throw a error if a product is created with the price less than 0', () => {
    expect(() => factoryProduct.createProduct('Super Sale', 1, -7)).toThrow('The product price never is less than 0.')
  });

  test('should throw a error if a product is created with the price grather than 50', () => {
    expect(() => factoryProduct.createProduct('Super Sale', 0, 100)).toThrow('The product price never is grather than 50.')
  });

});
