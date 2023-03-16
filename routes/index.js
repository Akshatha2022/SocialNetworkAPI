// Require express router
const router = require('express').Router();

// Importing all of the API routes from /api/index.js 
const apiRoutes = require('./api');

// adding the prefix of `/api` to all of the api routes imported from the `api` directory
router.use('/api', apiRoutes);

// 404 Status error message
router.use((req, res) => {
    res.status(404).send('<h1>😝 404 Error!</h1>');
  });

  //module exports router
module.exports = router;