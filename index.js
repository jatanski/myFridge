const config = require('config');
const express = require("express");
const app = express();
require("./startup/prod")(app);
require("./startup/db")();
const users = require('./routes/users');
const auth = require('./routes/auth');

if (!config.get('jwtPrivateKey')) {
  console.error('FATAL ERROR: jwtPrivateKey is not defined.');
  process.exit(1);
}

app.use(express.json());
app.use('/api/users', users);
app.use('/api/auth', auth);


app.get("/", (req, res) => {
  res.send("Hello world");
});

const port = process.env.PORT || 8000;
const index = app.listen(port, () =>
  console.log(`Listening on port ${port}...`)
);

module.exports = index;
