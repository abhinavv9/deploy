const express = require('express');

const app = express();
// configure environment variables
require('dotenv').config();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(process.env.PORT || 8080, () => {
    console.log('GCP DEPLOY -> listening on port: ', process.env.PORT);
});
