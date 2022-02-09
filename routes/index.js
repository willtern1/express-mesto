const router = require('express').Router();
const usersRouter = require('./users');
const cardsRouter = require('./cards');
const { NOT_FOUND } = require('../utils/errors');

router.use('/users', usersRouter);
router.use('/cards', cardsRouter);
router.use((req, res) => {
  res.status(NOT_FOUND).send({ message: 'Такой страницы нет' });
});
module.exports = router;
