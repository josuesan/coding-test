const FactoryProduct = require('../../factories/ProductFactory');
const Product = require('../../products/Product');

describe('Product', () => {

  test('should return a error if updatePrice is called', () => {
    const product = new Product('product', 1, 2);
    expect(() => product.updatePrice()).toThrow();
  });

  test('should return the maximum price when the product price is increased above the maximum price ', () => {
    const product = new Product('product', 1, 2);
    product.price = Product.maxPrice() + 1;
    expect(product.price).toBe(Product.maxPrice());
  });

  test('should return the minimun price when the product price is decreased above the minimun price ', () => {
    const product = new Product('product', 1, 2);
    product.price = Product.minPrice() - 1;
    expect(product.price).toBe(Product.minPrice());
  });

});
