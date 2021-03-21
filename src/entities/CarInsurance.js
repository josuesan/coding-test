class CarInsurance {
  constructor(products) {
    if (!Array.isArray(products)) {
      throw new Error('The products is not an array.');
    }
    this.products = new Array(...products);
  }

  updatePrice() {
    for (let i = 0; i < this.products.length; i++) {
      this.products[i].updatePrice();
    }
    return this.products;
  }
}

module.exports = CarInsurance;
