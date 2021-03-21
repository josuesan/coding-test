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

  updatePrice() {
    throw new Error('This method will be implemented in the extended class');
  }
}

module.exports = Product;
