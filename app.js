const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes');

const { PORT = 3000 } = process.env;
const app = express();
app.use(bodyParser.json());

app.use((req, res, next) => {
  req.user = {
    _id: '61fc2477d347ce1afc3dbb14', // вставьте сюда _id созданного в предыдущем пункте пользователя
  };

  next();
});

app.use(routes);
mongoose.connect('mongodb://localhost:27017/mestodb', () => {
  console.log('Подключение успешно');
});

app.listen(PORT, () => {
  console.log(`Started on port ${PORT}`);
});
