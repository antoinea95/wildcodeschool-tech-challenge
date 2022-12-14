// import d'express et mise en place du router
const express = require("express");
const { route } = require("../app");
const router = express.Router();

const argonautesCtrl = require("../controllers/argonautes");

// mise en place des routes
router.get("/", argonautesCtrl.getAllArgonautes);
router.post("/", argonautesCtrl.createArgonautes);

module.exports = router;
