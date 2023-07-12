const { getAllUsersController, getOneUserByIdController, getUserTasks } = require('../controller/apiController');

const router = require('express').Router();

router.get('/api/users', getAllUsersController);
router.get('/api/users/:id', getOneUserByIdController);
router.get('/api/users/:id/tasks', getUserTasks);

module.exports = router;