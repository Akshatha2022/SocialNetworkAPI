// Setting up Express Router requirements 
const router = require('express').Router();

// Setting up users and thoughts routes 
const usersRoutes = require('./users-routes');
const thoughtsRoutes = require('./thoughts-routes');

// it will add prefix of `/users` to created routes 
router.use('/users', usersRoutes);

// it will add prefix of `/thoughts` to created routes 
router.use('/thoughts', thoughtsRoutes);

// Export Module Router
module.exports = router;