const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  addFriend,
  removeFriend
} = require('../../controllers/userController');

// /users
router
  .route('/')
  .get(getUsers)
  .post(createUser);

// /users/:userId
router
  .route('/:userId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

// /users/:userId/friends/:friendId
router
  .route('/:userId/friends/')
  .post(addFriend)

router
.route('/:userId/friends/:friendId')
  .delete(removeFriend);

module.exports = router;
