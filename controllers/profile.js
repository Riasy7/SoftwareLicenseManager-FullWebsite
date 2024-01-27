const db = require('../routes/db-config');
const path = require('path');

exports.uploadProfilePicture = (req, res) => {
    console.log('Received file upload request:', req.file);
    if (!req.file) {
        console.log('No file received');
        return res.json({ status: 'error', error: 'Upload failed' });
    }

    const filePath = path.join('/uploads', req.file.filename);

    db.query('UPDATE users SET profilePicture = ? WHERE id = ?', [filePath, req.userId], (error, results) => {
        if (error) {
            console.error(error);
            res.json({ status: 'error', error: 'Database error' });
        } else {
            res.json({ status: 'success', path: filePath });
        }
    });
};