const express = require("express");
const loginRouter = express.Router();
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const jwt = require("jsonwebtoken");
const User = require("../Database/Scheme/loginSchema");
const crypto = require("crypto-js");

loginRouter.use(bodyParser.urlencoded({ extended: false }))
loginRouter.use(bodyParser.json());
loginRouter.use(cookieParser())

loginRouter.post("/", async (req, res) => {

    try {

        var da = await User.findOne({ userId: req.body.userId, password: req.body.password })
        if (da) {
            let met = {
                status: "Failure",
                message: "user already exist !!!",
            }
            res.status(500)
            res.send(met)
        } else {

            let token = jwt.sign({ userId: req.body.userId, password: req.body.password }, "pass@123", { expiresIn: 30 })
            var hash = crypto.SHA3(req.body.password, { outputLength: 256 });
            const loginUser = new User({
                userId: req.body.userId,
                password: hash,
                token: token
            })
            // store hash password in mongodb and also get back from mongodb

            await loginUser.save()
            let met = {
                status: "success",
                message: "New User Created Successfully !!!",
                token: token
            }
            res.send(met)
        }
    } catch (err) {
        let met = {
            status: "Failure",
            message: err.message,
        }
        res.status(400)
        res.send(met)
    }
    // }
})

module.exports = loginRouter;