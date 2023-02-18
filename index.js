const path = require("path");
const express = require("express");
const router = require("./routes/main.js");
const app = express();

// defining the port
const port = process.env.port || 8000;

// express settings
app.use(express.static(path.join(__dirname + "public")));
app.use(express.json());
app.use("/", router);

// listening to port 8000
app.listen(port, () => {
  console.log(
    `The server is listening at port ${port}\n "clt + click" here: http://localhost:${port}`
  );
});
