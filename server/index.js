const config = require('config');
const express = require('express');
const app = express();
const cors = require('cors');
//
// const users = require('./routes/users');
// const auth = require('./routes/auth');
//
require('./startup/prod')(app);
require('./startup/db')();
require('./startup/routes');

app.use(express.json());
app.use(cors())

//
// app.use('/api/users', users);
// app.use('/api/auth', auth);
//

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
