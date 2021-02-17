const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/app'));

app.get('/*', (req, res) =>
    res.sendfile('index.html', { root: 'dist/app' })
);

app.listen(process.env.PORT || 8080);