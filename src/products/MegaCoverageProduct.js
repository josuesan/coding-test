const Product = require('./Product');

class MegaCoverageProduct extends Product {
  static maxPrice() {
    return 80;
  }

  static minPrice() {
    return 80;
  }

  checkMinPrice(price) {
    if (price < MegaCoverageProduct.minPrice()) {
      throw new Error('The product price never is less than 80.');
    }
  }

  checkMaxPrice(price) {
    if (price > MegaCoverageProduct.maxPrice()) {
      throw new Error('The product price never is grather than 80.');
    }
  }

  set price(price) {
    this.checkMinPrice(price);
    this.checkMaxPrice(price);
    this._price = price;
  }

  get price() {
    return this._price;
  }

  updatePrice() {
    // DO nothing is a lengendary product
  }
}
module.exports = MegaCoverageProduct;
