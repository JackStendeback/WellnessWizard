const router = require('express').Router();
// const { Model, Names } = require('../models');
const authenticated = require('../utils/auth');

// GET request for finding all
router.get('/', async (req, res) => {
    try {
        res.render('homepage', {

            waterConsumption: '2.5',
            workouts: ['Running - 30 minutes', 'Weightlifting - 45 minutes'],
            calorieIntake: '2000',
            totalSleep: '8'
        });
    } catch (err) {
        res.status(500).json(err);
    }
})
// GET request for login
module.exports = router;