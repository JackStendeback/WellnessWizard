const router = require('express').Router();
// Repeat these comments for every route in the api folder
// const modelRoutes = require('filepath');

// router.use('directoryPath', modelRoutes);
const userRoutes = require('./userRoutes');
const workoutRoutes = require('./workoutRoutes');
const hydrationRoutes = require('./hydrationRoutes');
const sleepRoutes = require('./sleepRoutes');
const calorieRoutes = require('./calorieRoutes');


router.use('/users', userRoutes);
router.use('/workouts', workoutRoutes);
router.use('/hydration', hydrationRoutes);
router.use('/sleep', sleepRoutes);
router.use('/calories', calorieRoutes);

module.exports = router;