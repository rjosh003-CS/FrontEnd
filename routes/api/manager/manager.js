const express = require("express");
const router = express.Router();

// router and sub-routes
router
  .route("/")
  .get((err, req, res, next) => {
    console.log("path: ", req.path);
  })
  .post((err, req, res, next) => {});

module.exports = router;
