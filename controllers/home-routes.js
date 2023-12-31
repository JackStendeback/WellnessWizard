const router = require('express').Router();
// const { Model, Names } = require('../models');
const authenticated = require('../utils/auth');
const { Sleep, User, Workout, Hydration, Calorie } = require('../models');

// GET request for finding all
router.get('/', /* authenticated, */ async (req, res) => {
    try {
        const hydrationData = await Hydration.findOne({
            where: { user_id: 2 },
        });
        const userData = await User.findOne({
            where: { id: 2 },
        });
        const calorieData = await Calorie.findOne({
            where: { user_id: 2 },
        });
        const workoutData = await Workout.findAll({
            where: { user_id: 2 },
        });
        const sleepData = await Sleep.findOne({
            where: { user_id: 2 },
        });

        const hydration = hydrationData.get({ plain: true });
        const user = userData.get({ plain: true });
        const calorie = calorieData.get({ plain: true });
        const workouts = workoutData.map((workout) => workout.get({ plain: true }));
        const sleep = sleepData.get({ plain: true });

        res.render('homepage', {

            ...hydration,
            ...user,
            ...calorie,
            workouts,
            ...sleep,
            // logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/workout/:id', /* authenticated, */ async (req, res) => {
    try {
        const workoutData = await Workout.findByPk(req.params.id, {
            /* include anything from other models
            include: [
                {
                    
                }
            ]*/
        });

        const workout = workoutData.get({ plain: true });

        res.render('workout', {
            ...workout,
            // logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/hydration/:id',  /* authenticated, */ async (req, res) => {
    try {
        const hydrationData = await Hydration.findByPk(req.params.id, {
            /* include anything from other models
            include: [
                {
                    
                }
            ]*/
        });

        const hydration = hydrationData.get({ plain: true });

        res.render('hydration', {
            ...hydration,
            // logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/calories/:id',  /* authenticated, */ async (req, res) => {
    try {
        const caloriesData = await Calorie.findByPk(req.params.id, {
            /* include anything from other models
            include: [
                {
                    
                }
            ]*/
        });

        const calories = caloriesData.get({ plain: true });

        res.render('calories', {
            ...calories,
            // logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/sleep/:id',  /* authenticated, */ async (req, res) => {
    try {
        const sleepData = await Sleep.findByPk(req.params.id, {
            /* include anything from other models
            include: [
                {
                    
                }
            ]*/
        });

        const sleep = sleepData.get({ plain: true });

        res.render('sleep', {
            ...sleep,
            // logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/sign-up', (req, res) => {

    // if (req.session.logged_in) {
    //     res.redirect('/');
    //     return;
    // }

    res.render('sign-up');
});

router.get('/login', (req,res) => {
    
    // if (req.session.logged_in) {
    //     res.redirect('/');
    //     return;
    // }

    res.render('login');
});

module.exports = router;