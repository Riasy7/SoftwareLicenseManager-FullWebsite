const express = require('express');
const router = express.Router();
const db = require('../routes/db-config');

router.post('/serials', (req, res) => {
    const serial = req.body.serial;

    const query = 'INSERT INTO serials (serial) VALUES (?)';
    db.query(query, [serial], (error, results) => {
        if (error) {
            console.error('Database error:', error);
            res.status(500).send('Database error');
        } else {
            res.json({ message: 'Serial number saved' });
        }
    });
});

router.post('/licenses', (req, res) => {
    const { softwareName, licensingType, purchaseDate, expiryDate, cost, serial } = req.body;

    const query = 'INSERT INTO licenses (software_name, licensing_type, purchase_date, expiry_date, cost, serial) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(query, [softwareName, licensingType, purchaseDate, expiryDate, cost, serial], (error, results) => {
        if (error) {
            console.error('Database error:', error);
            res.status(500).send('Database error');
        } else {
            res.json({ message: 'License saved' });
        }
    });
});

module.exports = router;