const router = require('express').Router();
const usersRoutes = require('./user-routes');
const thoughtsRoutes = require('./thought-routes');

// it will add prefix of `/users` to created routes 
router.use('/users', usersRoutes);

// add prefix of `/thoughts` to created routes 
router.use('/thoughts', thoughtsRoutes);

module.exports = router;