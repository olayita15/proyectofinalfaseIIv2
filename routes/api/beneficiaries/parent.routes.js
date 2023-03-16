const router = require("express").Router();
const {
  getAllParentInformation,
  getParentInformationByNumDoc,
  updateParentInformationByNumDoc,
} = require("../../../controllers/beneficiaries/parentController");

router.get("/", getAllParentInformation);

router.get("/:numDoc", getParentInformationByNumDoc);

router.patch("/:numDoc", updateParentInformationByNumDoc);

module.exports = router;
