const Product = require('./Product');

class SpecialFullCoverageProduct extends Product {
  updatePrice() {
    if (this.sellIn <= 0) {
      this.price = 0;
      this.sellIn--;
      return;
    }
    if (this.price >= Product.maxPrice()) {
      this.sellIn--;
      return;
    }
    if (this.sellIn <= 10 && this.sellIn > 5) {
      this.price += 2;
      this.sellIn--;
      return;
    }
    if (this.sellIn <= 5 && this.sellIn > 0) {
      this.price += 3;
      this.sellIn--;
      return;
    }
    this.price++;
    this.sellIn--;
  }
}
module.exports = SpecialFullCoverageProduct;
