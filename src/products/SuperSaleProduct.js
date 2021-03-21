const Product = require('./Product');

class SuperSaleProduct extends Product {
  updatePrice() {
    if (this.sellIn <= 0 && this.price <= Product.minPrice()) {
      this.sellIn--;
      return;
    }
    if (this.sellIn <= 0) {
      this.price -= 4;
      this.sellIn--;
      return;
    }
    this.price -= 2;
    this.sellIn--;
  }
}
module.exports = SuperSaleProduct;
