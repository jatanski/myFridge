const config = require('config');
const express = require('express');
const app = express();
const cors = require('cors');

require('./startup/prod')(app);
require('./startup/db')();

app.use(express.json());
// przekazywanie JWT w headerze, aby był widoczny z perpspektywy fetcha
app.use(cors({
    exposedHeaders: ['x-auth-token'],
}));
require('./startup/routes')(app);

if (!config.get('jwtPrivateKey')) {
    console.error('FATAL ERROR: jwtPrivateKey is not defined.');
    process.exit(1);
}

app.get('/', (req, res) => {
    res.send('Hello world');
});

const port = process.env.PORT || 8000;
const index = app.listen(port, () => console.log(`Listening on port ${port}...`));

module.exports = index;