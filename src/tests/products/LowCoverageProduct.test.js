const FactoryProduct = require('../../factories/ProductFactory');

describe('Low Coverage Product', () => {
  const factoryProduct = new FactoryProduct();

  test('should return the price lower when past a day and the product is not expired', () => {
    const product = factoryProduct.createProduct('Low Coverage', 5, 7);
    product.updatePrice();
    expect(product.sellIn).toBe(4);
    expect(product.price).toBe(6);
  });

  test('should return the price lower by two when past a day and the product is expired', () => {
    const product = factoryProduct.createProduct('Low Coverage', 0, 7);
    product.updatePrice();
    expect(product.sellIn).toBe(-1);
    expect(product.price).toBe(5);
  });

  test('should throw a error if a product is created with the price is less than 0', () => {
    expect(() => factoryProduct.createProduct('Low Coverage', 1, -7)).toThrow('The product price never is less than 0.')
  });

});
