require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const { RefreshToken } = require("../models");

const router = express.Router();

router.post("/", async (req, res) => {
    const refreshToken = req.body.refreshToken;

    const dbToken = await RefreshToken.findOne({
        where: {
            refreshToken,
        },
    });

    if (!dbToken) return res.sendStatus(401);

    jwt.verify(
        refreshToken,
        process.env.JWT_REFRESH_TOKEN_SECRET,
        (err, user) => {
            if (err) return res.sendStatus(401);

            const payload = {
                id: user.id,
                username: user.username,
            };

            const token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn: "5s",
            });

            return res.send({
                token,
            });
        }
    );
});

module.exports = router;
