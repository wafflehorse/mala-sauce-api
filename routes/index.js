var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/api/yoyo", function(req, res, next) {
  res.send({ text: "Yo Yo whatup!" });
});

module.exports = router;
