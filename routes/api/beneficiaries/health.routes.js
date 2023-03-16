const router = require("express").Router();
const { getHealthInfo, getHealthInfoByNumDoc, editHealthInfoByNumDoc } = require('../../../controllers/beneficiaries/healthInfoController');

router.get("/", getHealthInfo);
router.get("/:numDoc", getHealthInfoByNumDoc);
router.patch("/:numDoc", editHealthInfoByNumDoc);

module.exports = router;
