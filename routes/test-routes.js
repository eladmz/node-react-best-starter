const express = require('express');

const route = express.Router();

route.get('/test', (req, res, next) => {
    res.json({ message: 'Hello from server!' });
});

module.exports = route;
