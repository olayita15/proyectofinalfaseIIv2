const router = require("express").Router();
const health = require('../../models/beneficiaries/healthSchema');

router.get("/", async (req, res) => {
    try {
        const healthInfo = await health.find();
        res.json(healthInfo);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;