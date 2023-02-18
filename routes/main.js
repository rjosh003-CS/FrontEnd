const express = require("express");
const apiRoutes = require("./api/api");

const router = express.Router();

// routes handler and sub routes
router
  .route("/")
  .get((err, req, res, next) => {
    console.log({ path: req.path });
    res.send("<h1>Home Page</h1>");
  })
  .post((err, req, res, next) => {});

router.use("/api", apiRoutes);

module.exports = router;
