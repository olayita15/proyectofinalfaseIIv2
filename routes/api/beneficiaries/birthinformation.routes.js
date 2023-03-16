
const router = require("express").Router();
const { getAllBirthInformation, getBirthInformationByNumDoc, updateBirthInformationByNumDoc} = require('../../../controllers/beneficiaries/birthinformationController');

router.get("/", getAllBirthInformation);

router.get("/:numDoc", getBirthInformationByNumDoc);

router.patch("/:numDoc", updateBirthInformationByNumDoc);

module.exports = router;