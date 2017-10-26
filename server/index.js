const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'There' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('listening to port 3000');
});
