const router = require('express').Router();
const { Calorie } = require('../../models');
const authenticated = require('../../utils/auth');

router.post('/', authenticated, async (req, res) => {
    try {
        const newCalorie = await Calorie.create({
            ...req.body,
        });

        res.status(200).json(newCalorie);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', authenticated, async (req, res) => {
    try {
        const calorieData = await Calorie.destroy({
            where: {
                id: req.params.id,
            },
        });

    if (!calorieData) {
        res.status(404).json({ message: "No calorie information found with this id" });
        return;
    }

    res.status(200).json(calorieData);

    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;