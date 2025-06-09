require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./models");
const PORT = process.env.PORT || 5000;
const login = require("./routes/login");
const register = require("./routes/register");
const refresh = require("./routes/refresh");
const auth = require("./middleware/auth")

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", auth, (req, res) => {
    res.send("Sidhu");
});

app.use("/login", login);
app.use("/register", register);
app.use("/refresh", refresh);

(async () => {
    const res = await db.sequelize.authenticate();
    await db.sequelize.sync();

    // await db.sequelize.truncate();

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
})();
