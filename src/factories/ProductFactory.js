const {
  FullCoverageProduct,
  MediumCoverageProduct,
  LowCoverageProduct,
  MegaCoverageProduct,
  SpecialFullCoverageProduct,
  SuperSaleProduct,
} = require('../products');

class ProductFactory {
  createProduct(name, sellIn, price) {
    switch (name) {
      case 'Full Coverage':
        return new FullCoverageProduct(name, sellIn, price);
      case 'Medium Coverage':
        return new MediumCoverageProduct(name, sellIn, price);
      case 'Low Coverage':
        return new LowCoverageProduct(name, sellIn, price);
      case 'Mega Coverage':
        return new MegaCoverageProduct(name, sellIn, price);
      case 'Special Full Coverage':
        return new SpecialFullCoverageProduct(name, sellIn, price);
      case 'Super Sale':
        return new SuperSaleProduct(name, sellIn, price);
      default:
        throw new Error('Invalid product name');
    }
  }
}

module.exports = ProductFactory;
