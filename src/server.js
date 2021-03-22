const express = require('express');
const cors = require('cors');

const CarInsurance = require('./entities/CarInsurance');
const ProductFactory = require('./factories/ProductFactory');

const port = 4500;
const app = express();
const router = express.Router();

app.use(express.json());
app.use(cors());
app.use(router);

router.get('/products', async (req, res) => {
  const { name, sellIn, price } = req.query;
  const factory = new ProductFactory();
  try {
    const prods = [factory.createProduct(name, sellIn, price)];
    const carInsurance = new CarInsurance(prods);
    const response = [];
    for (let i = 1; i <= 30; i += 1) {
      carInsurance.updatePrice();
      response.push({
        name: carInsurance.products[0].name,
        sellIn: carInsurance.products[0].sellIn,
        price: carInsurance.products[0].price,
      });
    }
    res.send(response);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

app.listen(port);
