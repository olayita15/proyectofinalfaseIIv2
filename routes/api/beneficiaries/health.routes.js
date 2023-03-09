const router = require("express").Router();
const healthInfo = require('../../../models/beneficiaries');

router.get("/", async (req, res) => {
    try {
        const health = await healthInfo.find({}, {healthInfo: 1});
        res.json(health);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });
    }
});




module.exports = router;