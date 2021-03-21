class Product {
  constructor(name, sellIn, price) {
    this.name = String(name);
    this.sellIn = Number(sellIn);
    this.price = Number(price);
  }

  updatePrice() {
    throw new Error('This method will be implemented in the extended class');
  }
}

module.exports = Product;
