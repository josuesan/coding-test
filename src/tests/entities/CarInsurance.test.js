const CarInsurance = require('../../entities/CarInsurance');
const ProductFactory = require('../../factories/ProductFactory');

describe('Car Insurance', () => {
  test('should return a carInsurance instance', () => {
    const carInsurance = new CarInsurance([]);
    expect(carInsurance).not.toBe(null);
  });

  test('should return a list of products when call updatePrice', () => {
    const factory = new ProductFactory();

    const carInsurance = new CarInsurance([
      factory.createProduct('Medium Coverage', 10, 20),
      factory.createProduct('Medium Coverage', 10, 20),
    ]);

    const products = carInsurance.updatePrice();
    expect(products.length).toBe(2);
    expect(Array.isArray(products)).toBe(true);
  });

  test('should throw an error if products is not passed', () => {
    expect(() => new CarInsurance()).toThrow('The products is not an array.');
  });

});
