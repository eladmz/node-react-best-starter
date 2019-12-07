const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const testRoutes = require('./routes/test-routes');

const app = express();
app.use(bodyParser.json());

app.use(testRoutes);
app.use(express.static(path.join(__dirname, 'client', 'build')));

app.listen(4000, () => console.log('Server is up and running!'));
