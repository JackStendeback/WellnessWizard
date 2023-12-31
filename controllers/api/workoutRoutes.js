const router = require('express').Router();
const { Workout } = require('../../models');
const authenticated = require('../../utils/auth');

router.post('/', authenticated, async (req, res) => {
    try {
        const newWorkout = await Workout.create({
            ...req.body,
        });

        res.status(200).json(newWorkout);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/:id', authenticated, async (req, res) => {
    try {
        const workoutData = await Workout.update({
            where: {
              id: req.params.id,
            },
        });

        if (!workoutData) {
            res.status(404).json({ message: "No workout information found with this id" });
            return;
        }

        res.status(200).json(workoutData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', authenticated, async (req, res) => {
    try {
        const workoutData = await Workout.destroy({
            where: {
                id: req.params.id,
            },
        });

    if (!workoutData) {
        res.status(404).json({ message: "No workout information found with this id" });
        return;
    }

    res.status(200).json(workoutData);

    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;