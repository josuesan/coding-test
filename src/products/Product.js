class Product {
  constructor(name, sellIn, price) {
    this.name = String(name);
    this.sellIn = Number(sellIn);
    this.price = Number(price);
  }

  static maxPrice() {
    return 50;
  }

  static minPrice() {
    return 0;
  }

  set price(price) {
    // * In this method with have two alternatives, throw an error when some update is less than 0
    // * EXAMPLE if price passed is -1
    // * OTHERWISE: if price is passed less than 0, change this price to zero
    // * EXAMPLE price -1 and change to 0
    this.checkMinPrice(price);
    this.checkMaxPrice(price);
    this._price = price;
  }

  get price() {
    return this._price;
  }

  checkMinPrice(price) {
    if (price < Product.minPrice()) {
      throw new Error('The product price never is less than 0.');
    }
  }

  checkMaxPrice(price) {
    if (price > Product.maxPrice()) {
      throw new Error('The product price never is grather than 50.');
    }
  }

  updatePrice() {
    throw new Error('This method will be implemented in the extended class');
  }
}

module.exports = Product;
