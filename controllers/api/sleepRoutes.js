const router = require('express').Router();
const { Sleep } = require('../../models');
const authenticated = require('../../utils/auth');

router.post('/', authenticated, async (req, res) => {
    try {
        const newSleep = await Sleep.create({
            ...req.body,
        });

        res.status(200).json(newSleep);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/:id', authenticated, async (req, res) => {
    try {
        const sleepData = await Sleep.update({
            where: {
              id: req.params.id,
            },
        });

        if (!sleepData) {
            res.status(404).json({ message: "No sleep information found with this id" });
            return;
        }

        res.status(200).json(sleepData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', authenticated, async (req, res) => {
    try {
        const sleepData = await Sleep.destroy({
            where: {
                id: req.params.id,
            },
        });

    if (!sleepData) {
        res.status(404).json({ message: "No sleep routines found with this id" });
        return;
    }

    res.status(200).json(sleepData);

    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;