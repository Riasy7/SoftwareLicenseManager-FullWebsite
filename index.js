const express = require("express");
const db = require("./routes/db-config");
const app = express();
const cookie = require("cookie-parser");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;
app.use("/js", express.static(__dirname + "/public/js"));
app.use("/css", express.static(__dirname + "/public/css"));
app.use("/images", express.static(__dirname + "/public/images"));
app.use("/uploads", express.static(__dirname + "/uploads"));

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(cookie());
db.connect((err) => {
    if (err) throw err;
})
app.use(express.json());
app.use("/", require("./routes/pages"));
app.use("/api", require("./controllers/auth"))
app.use("/api", require("./controllers/license"));

app.listen(PORT);
