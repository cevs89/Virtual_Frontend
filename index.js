'use strict';

const path = require('path');

// Dependencias NPM
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Instancias
const app = express();

// Middlewares Express
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
})

app.listen(6550, () => {
	console.log('Servidor corriendo');
});