require("dotenv").config();
const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const { User } = require("../models");
const jwt = require("jsonwebtoken");
const { RefreshToken } = require("../models");

router.post("/", async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({
        where: {
            username: username,
        },
    });

    if (!user) return res.status(401).send("Invalid Credentials.");

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) res.status(401).send("Invalid Credentials.");

    const payload = {
        id: user.id,
        username: user.username,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "5s",
    });

    const refreshToken = jwt.sign(
        payload,
        process.env.JWT_REFRESH_TOKEN_SECRET
    );

    RefreshToken.create({
        uid: user.id,
        refreshToken,
    });

    const data = {
        id: user.id,
        username: username,
        token: token,
        refreshToken: refreshToken,
    };
    return res.send(data);
});

module.exports = router;
