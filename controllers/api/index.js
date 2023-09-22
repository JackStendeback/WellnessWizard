const router = require('express').Router();
// Repeat these comments for every route in the api folder
// const modelRoutes = require('filepath');

// router.use('directoryPath', modelRoutes);
const userRoutes = require('./userRoutes');


router.use('/users', userRoutes);

module.exports = router;