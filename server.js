const express = require('express');
const productRoutes = require('./routers/productRoutes');
const orderRoutes = require('./routers/orderRoutes');
const paymentRoutes = require('./routers/paymentRoutes');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/payments', paymentRoutes);

app.get('/', (req, res) => {
  res.send('<h2>Hello world </h2>');
});

app.listen(PORT, () => {
  console.log('API is listening on port', PORT);
});
