const Product = require('./Product');

class FullCoverageProduct extends Product {
  updatePrice() {
    if (this.sellIn <= 0 && this.price >= Product.maxPrice()) {
      this.sellIn--;
      return;
    }
    if (this.sellIn <= 0) {
      this.price += 2;
      this.sellIn--;
      return;
    }
    if (this.price < Product.maxPrice()) {
      this.price++;
      this.sellIn--;
      return;
    }
    this.sellIn--;
  }
}
module.exports = FullCoverageProduct;
