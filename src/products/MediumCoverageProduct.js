const Product = require('./Product');

class MediumCoverageProduct extends Product {
  updatePrice() {
    if (this.sellIn <= 0 && this.price <= Product.minPrice()) {
      this.sellIn--;
      return;
    }
    if (this.sellIn <= 0) {
      this.price -= 2;
      this.sellIn--;
      return;
    }
    if (this.price > Product.minPrice()) {
      this.price--;
      this.sellIn--;
      return;
    }
    this.sellIn--;
  }
}
module.exports = MediumCoverageProduct;
