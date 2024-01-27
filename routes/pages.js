const express = require("express");
const loggedIn = require("../controllers/loggedIn")
const path = require('path');
const logout = require("../controllers/logout")
const router = express.Router();
const db = require('../routes/db-config'); 

// function for pages POV to determine if user is logged in or not
function determineStatus(req, res, next) {
    if(req.user){
        if(req.user.role === 'provider') {
            req.status = 'provider';
        } else if(req.user.role === 'client') {
            req.status = 'client';
        } else {
            req.status = 'unknown';
        }
    } else {
        req.status = 'no';
    }
    next();
}
router.get("/", loggedIn, determineStatus, (req, res) => {
    res.render("index", {status: req.status, user: req.user});
});

router.get("/pricing", loggedIn, determineStatus, (req, res) => {
    res.render('pricing', { user: req.user, status: req.status });
});

router.get("/about", loggedIn, determineStatus, (req, res) => {
    res.render('about', { user: req.user, status: req.status });
});

router.get("/faq", loggedIn, determineStatus, (req, res) => {
    res.render('faq', { user: req.user, status: req.status });
});
router.get("/changepassword", loggedIn, determineStatus, (req, res) => {
    res.render('changepassword', { user: req.user, status: req.status });
});
router.get("/signup", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/signup.html'));
})

router.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/login.html'));
})





router.get('/user-dashboard', loggedIn, (req, res) => {
    db.query('SELECT profilePicture FROM users WHERE id = ?', [req.user.id], (error, results) => {
        if (error) {
            console.error('Database error:', error); 
            res.status(500).send('Database error');
        } else {
            let status;
            if(req.user.role === 'provider') {
                status = 'provider';
            } else if(req.user.role === 'client') {
                status = 'client';
            } else {
                status = 'no';
            }
            res.render('user_dashboard', { userProfilePicture: results[0].profilePicture, user: req.user, status: status });
        }
    });
});
router.get('/api/getUserData', loggedIn, (req, res) => {
    db.query('SELECT profilePicture FROM users WHERE id = ?', [req.user.id], (error, results) => {
        if (error) {
            console.error('Database error:', error); 
            res.status(500).send('Database error');
        } else {
            res.json({ status: 'success', user: { profilePicture: results[0].profilePicture } });
        }
    });
});
router.get("/handling", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/serialnumberhandling.html'));
});
router.get("/managespecific_client", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/managespecific_client.html'));
});
router.get("/generated", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/generate.html'));
});

router.get("/associateserialnumber", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/associateserialnumber.html'));
});
router.get("/associatednumberpopup", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/associatednumberpopup.html'));
});
router.get("/enabledisable", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/enabledisable.html'));
});
router.get("/changepassword", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/changepassword.html'));
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
router.get("/findserialnumber", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/findserialnumber.html'));
});

router.get("/softwarelicenses", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/softwarelicenses.html'));
});

router.get("/manage_clients", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/manage_clients.html'));
});
router.get("/contactpage", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/contactpage.html'));
});

router.get('/api/licenses', (req, res) => {
    const query = 'SELECT * FROM licenses';
    db.query(query, (error, results) => {
        if (error) {
            console.error('Database error:', error);
            res.status(500).send('Database error');
        } else {
            res.json(results);
        }
    });
});
router.post('/api/serials', (req, res) => {
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
router.post('/delete-serial', loggedIn, (req, res) => {
    var serial = req.body.serial;

    db.query('DELETE FROM licenses WHERE serial = ?', [serial], function(error, results, fields) {
        if (error) {
            console.log(error);
            res.json({ success: false });
        } else {
            res.json({ success: true });
        }
    });
});
router.post('/edit-license', loggedIn, (req, res) => {
    const { softwareName, licensingType, purchaseDate, expiryDate, cost, serial } = req.body;

    const query = 'UPDATE licenses SET software_name = ?, licensing_type = ?, purchase_date = ?, expiry_date = ?, cost = ? WHERE serial = ?';
    db.query(query, [softwareName, licensingType, purchaseDate, expiryDate, cost, serial], (error, results) => {
        if (error) {
            console.error('Database error:', error);
            res.status(500).send('Database error');
        } else {
            res.json({ message: 'License updated' });
        }
    });
});
router.get("/logout", logout)

module.exports = router;