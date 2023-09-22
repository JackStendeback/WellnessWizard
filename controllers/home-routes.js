const router = require('express').Router();
// const { Model, Names } = require('../models');
const authenticated = require('../utils/auth');

// GET request for finding all
router.get('/', async (req, res) => {
    try {
        res.render('homepage');
    } catch (err) {
        res.status(500).json(err);
    }
})
// GET request for login
module.exports = router;