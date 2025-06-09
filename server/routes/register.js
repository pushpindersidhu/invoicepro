const express = require("express");
const bcrypt = require("bcrypt");
const { User } = require("../models");

const router = express.Router();

router.post("/", async (req, res) => {
    console.log(req.body)
    const { firstname, lastname, username, password } = req.body;

    const existingUser = await User.findOne({
        where: {
            username: username,
        },
    });

    if (existingUser) return res.send("Username already exists");

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await User.create({
        firstname,
        lastname,
        username,
        password: hash,
    });

    const resData = {
        firstname: user.firstname,
        lastname: user.lastname,
        username: user.username,
    };

    res.send(resData);
});

module.exports = router;
