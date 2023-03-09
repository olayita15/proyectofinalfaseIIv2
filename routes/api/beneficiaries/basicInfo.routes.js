const router = require("express").Router();
const basicInfo = require('../../../models/beneficiaries');

router.get("/", async (req, res) => {
    try {
        const basicInfoRes = await basicInfo.find({},{basicinfo:1});
        res.json(basicInfoRes);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;