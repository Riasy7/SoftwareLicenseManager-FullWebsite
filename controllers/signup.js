const db = require("../routes/db-config");
const bcrypt = require("bcryptjs");

const signup = async (req, res) => {
    console.log(req.body);
    const {name, email, password:Npassword, role } = req.body;
    if(!name || !email || !Npassword || !role) return res.json({status: "error", error: "Please Enter your name, email, password and role"});
    else{
        console.log(email)
        db.query('SELECT email FROM users WHERE email = ?', [email], async (error, results) => {
            if(error) throw error;
            if(results[0]) return res.json({status: "error", error: "Email already in use"});
            else{
                const password = await bcrypt.hash(Npassword, 8);
                console.log(password);
                db.query('INSERT INTO users SET ?', {name: name, email: email, password: password, role: role}, (error, results) => {
                    if(error) throw error;
                    return res.json({status: "success", success: "User has been successfully registered"});
                })
            }
        })
    }
}
module.exports = signup;