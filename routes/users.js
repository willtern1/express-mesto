const router = require('express').Router();
const {
  getUsers,
  getUser,
  createUser, updateUser, updateAvatar
} = require('../controllers/users');

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', createUser);
router.patch('/users/me', updateUser);
router.patch('/users/me/avatar', updateAvatar);


module.exports = router;