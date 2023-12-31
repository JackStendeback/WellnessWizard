const router = require('express').Router();
const { Hydration } = require('../../models');
const authenticated = require('../../utils/auth');

router.post('/', /* authenticated, */ async (req, res) => {
    try {
        const newHydration = await Hydration.create({
            ...req.body,
        });

        res.status(200).json(newHydration);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/:id', authenticated, async (req, res) => {
    try {
        const hydrationData = await Hydration.update({
            where: {
              id: req.params.id,
            },
        });

        if (!hydrationData) {
            res.status(404).json({ message: "No hydration information found with this id" });
            return;
        }

        res.status(200).json(hydrationData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', authenticated, async (req, res) => {
    try {
        const hydrationData = await Hydration.destroy({
            where: {
                id: req.params.id,
            },
        });

    if (!hydrationData) {
        res.status(404).json({ message: "No hydration information found with this id" });
        return;
    }

    res.status(200).json(hydrationData);

    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;