const express = require("express");
const bodyParser = require("body-parser")
const User = require("../Database/Scheme/loginSchema");
const UpdatePass = express.Router();
const crypto = require("crypto-js");

UpdatePass.use(bodyParser.urlencoded({ extended: false }))
UpdatePass.use(bodyParser.json());

UpdatePass.post("/", async (req, res) => {
    const { userId, password, newPassword } = req.body
    try {
        const checkUserId = await User.findOne({ userId: userId });
        if (checkUserId) {
            let hash = crypto.SHA3(password, { outputLength: 256 });
            let newHash = crypto.SHA3(newPassword, { outputLength: 256 });
            if (hash.toString() === checkUserId.password) {
                const updateResult = await User.findOneAndUpdate({ userId: checkUserId.userId }, { $set: { password: newHash.toString() } }, { returnNewDocument: true });
                res.send(updateResult)
            } else {
                res.send("Old password missmatch")
            }
        } else {
            res.send("No Data found")
        }
    } catch (err) {
        console.log(err);
        let met = {
            status: "Failure",
            message: err.message,
        }
        res.status(400)
        res.send(met)
    }
})

module.exports = UpdatePass