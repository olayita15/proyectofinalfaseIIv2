const router = require("express").Router();
const assistanceController = require('../../../controllers/beneficiaries/assistanceInformationController');

// Endpoint Get All Assistance
router.get("/", assistanceController.getAllAssistance);

// Endpoint Get Assistance by numDoc
router.get("/:numDoc", assistanceController.getAssistanceByNumDoc);

// Endpoint patch to edit Assistance finding for numDoc
router.patch("/:numDoc", assistanceController.updateAssistanceByNumDoc);

module.exports = router;
