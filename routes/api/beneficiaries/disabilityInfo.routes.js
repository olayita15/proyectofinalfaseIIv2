const router = require("express").Router();
const beneficiaryController = require("../../../controllers/beneficiaries/disabilityInfoController");

router.get("/", beneficiaryController.getAllDisabilityInfo);

router.get("/:numDoc", beneficiaryController.getDisabilityInfoByDoc);

router.patch("/:numDoc", beneficiaryController.updateDisabilityInfoByDoc);

module.exports = router;
