const jwt = require('jsonwebtoken');

function authenticate(req, res, next) {
    const token = req.cookies.userRegistered;
    if (!token) {
        return res.status(401).json({ status: 'error', error: 'Not authenticated' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({ status: 'error', error: 'Forbidden' });
        }

        req.userId = decoded.id;
        next();
    });
}

module.exports = authenticate;