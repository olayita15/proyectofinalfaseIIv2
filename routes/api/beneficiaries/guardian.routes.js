const router = require("express").Router();
const beneficiariesController = require('../../../controllers/beneficiaries/guardianController');

router.get("/", beneficiariesController.getAllGuardians);

router.get("/:numDoc", beneficiariesController.getGuardianByNumDoc);

router.patch("/:numDoc", beneficiariesController.updateGuardianInfo);

module.exports = router;
