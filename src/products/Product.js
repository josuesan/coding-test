class Product {
  constructor(name, sellIn, price) {
    this.checkMinPrice(price);
    this.checkMaxPrice(price);
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
    if (price > Product.maxPrice()) {
      this._price = Product.maxPrice();
      return;
    }
    if (price < Product.minPrice()) {
      this._price = Product.minPrice();
      return;
    }
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
