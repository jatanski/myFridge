const express = require("express");
const app = express();
require("./startup/prod")(app);
require("./startup/db")();

app.get("/", (req, res) => {
  res.send("Hello world");
});

const port = process.env.PORT || 8000;
const index = app.listen(port, () =>
  console.log(`Listening on port ${port}...`)
);

module.exports = index;
