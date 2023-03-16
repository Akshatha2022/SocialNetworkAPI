// Setting up Express Router requirements 
const router = require('express').Router();

// Setting up users and thoughts routes 
const usersRoutes = require('./user-routes');
const thoughtsRoutes = require('./thought-routes');

// it will add prefix of `/users` to created routes 
router.use('/users', usersRoutes);

// it will add prefix of `/thoughts` to created routes 
router.use('/thoughts', thoughtsRoutes);

// Export Module Router
module.exports = router;