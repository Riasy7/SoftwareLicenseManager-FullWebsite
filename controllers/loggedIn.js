const db = require("../routes/db-config");
const jwt = require('jsonwebtoken');

const loggedIn = (req, res, next) => {
    if (!req.cookies.userRegistered) return next();
    try {
        const decoded = jwt.verify(req.cookies.userRegistered, process.env.JWT_SECRET);
        db.query('SELECT * FROM users WHERE id = ?', [decoded.id], (err, results) => {
            if(err) return next();
            req.user = {id: results[0].id, role: results[0].role, name: results[0].name, email: results[0].email}; 
            return next();
        })
    } catch(err) {
        if(err) return next();
    }
}
module.exports = loggedIn;