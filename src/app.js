const express = require('express');
const app = express();
const personRoutes = require('./routes/personRoutes');

app.use(express.json());

app.use('/api/people', personRoutes);

module.exports = app;
