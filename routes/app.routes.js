const { homeController } = require('../controller/appController');

const router = require('express').Router();

router.get('/home', homeController);

module.exports = router;