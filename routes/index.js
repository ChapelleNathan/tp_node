const router = require('express').Router();
const appRouter = require('./app.routes');

router.use(appRouter);

router.get('*', (request, response) => { response.redirect('/home') });

module.exports = router;