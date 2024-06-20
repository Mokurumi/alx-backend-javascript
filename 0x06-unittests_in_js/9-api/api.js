const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});

app.get('/cart/:id', (req, res) => {
  const { id } = req.params;
  if (isNaN(id)) {
    res.status(400).send('ID must be a number');
  } else {
    res.send(`Payment methods for cart ${id}`);
  }
});

module.exports = app;

