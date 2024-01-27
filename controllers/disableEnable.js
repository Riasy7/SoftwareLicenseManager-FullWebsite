const express = require('express');
const deleteSerial = require('./controllers/deleteSerial');
const app = express();

app.use(express.json());

app.post('/delete-serial', deleteSerial);

app.listen(3000, () => console.log('Server running on port 3000'));