const { getAllUsersController, getOneUserByIdController } = require('../controller/apiController');

const router = require('express').Router();

router.get('/api/users', getAllUsersController);
router.get('/api/users/:id', getOneUserByIdController);

module.exports = router;