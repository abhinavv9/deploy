const express = require('express');

const app = express();
// configure environment variables
require('dotenv').config();

app.get('/', (req, res) => {
    res.send('Hello World! abcd');
});

app.listen(process.env.PORT || 8080, () => {
    console.log('GCP DEPLOY aaa-> listening on port: ', process.env.PORT);
});
