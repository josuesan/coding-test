const FactoryProduct = require('../../factories/ProductFactory');

describe('Factory Product', () => {
  const factoryProduct = new FactoryProduct();
  test('should return a factory', () => {
    const factoryProduct = new FactoryProduct();
    expect(factoryProduct).not.toBe(null);
  });

  test('should return a FullCoverageProduct when factory recive full coverage as params', () => {
    const product = factoryProduct.createProduct('Full Coverage', 2, 0);
    expect(product[0]).toBe('Full Coverage');
  });

  test('should return a SpecialFullCoverageProduct when factory recive special full coverage as params', () => {
    const product = factoryProduct.createProduct('Special Full Coverage', 15, 20);
    expect(product[0]).toBe('Special Full Coverage');
  });

  test('should return a MediumCoverageProduct when factory recive medium coverage as params', () => {
    const product = factoryProduct.createProduct('Medium Coverage', 10, 20);
    expect(product[0]).toBe('Medium Coverage');
  });

  test('should return a LowCoverageProduct when factory recive low coverage as params', () => {
    const product = factoryProduct.createProduct('Low Coverage', 5, 7);
    expect(product[0]).toBe('Low Coverage');
  });

  test('should return a MegaCoverageProduct when factory recive mega coverage as params', () => {
    const product = factoryProduct.createProduct('Mega Coverage', -1, 80);
    expect(product[0]).toBe('Mega Coverage');
  });

  test('should return a SuperSaleProduct when factory recive super sale as params', () => {
    const product = factoryProduct.createProduct('Super Sale', 3, 6);
    expect(product[0]).toBe('Super Sale');
  });

});
