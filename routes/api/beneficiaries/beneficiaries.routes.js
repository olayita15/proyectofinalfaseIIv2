const router = require("express").Router();
const beneficiariesController = require('../../../controllers/beneficiaries/beneficiariesController');

// Endpoint Get All Beneficiaries
router.get("/", beneficiariesController.getAllBeneficiaries);

// Endpoint Create Beneficiarie
router.post("/", beneficiariesController.createBeneficiarie);

module.exports = router;
