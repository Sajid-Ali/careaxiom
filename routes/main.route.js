const { Router } = require("express"); //import express
const { getWebsitesTitle } = require("../controllers/main.controller");

const router = Router();

router.get("/I/want/title", getWebsitesTitle);

module.exports = router;
