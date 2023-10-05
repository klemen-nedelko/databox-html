const path = require('path');
const express = require('express');

const app = express();

app.use('/', express.static(path.join(__dirname, 'static')))
app.listen(8083, () => {
    console.log(`Listening on port 8083`)
})