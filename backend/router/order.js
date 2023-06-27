const express = require("express");

const router = express.Router();

const ordercontroller = require("../controller/orderc");

router.get("/", ordercontroller.index);
router.post("/submitform", ordercontroller.submitform);
router.get("/deleted/:productid", ordercontroller.deleted);

module.exports = router;
