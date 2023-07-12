const { homeController, userController } = require('../controller/appController');

const router = require('express').Router();

router.get('/home', homeController);
router.get('/user/:id/tasks', userController);

module.exports = router;