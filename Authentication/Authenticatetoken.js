const express = require("express");
const authenticate = express.Router();
const jwt = require("jsonwebtoken");
const moment = require("moment")

authenticate.use("/", (req, res, next) => {
    console.log("Welcome User");
    try {

        jwt.verify(req?.headers?.authorization.split(" ")[1], "pass@123", function (err, decoded) {
            if (decoded) {
                next();
            }
            if (err) {
                console.log("er", err.message);
                err = {
                    name: err.name,
                    message: err.message,
                    expiredAt: moment(err.expiredAt).format("DD/MM/YYYY HH:mm:ss")
                }
                res.status(401)
                res.send(err)
            }
        });
    } catch (error) {
        res.status(401)
        res.send("Invalid Token !!!")
    }

})

module.exports = authenticate;