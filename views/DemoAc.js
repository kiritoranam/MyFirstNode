const AccDetails = require("../Database/Scheme/DemoAcSchema");

const saveDemoAcDetails = async (req, res) => {

    try {

        const newAccount = new AccDetails({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            mobileNo: req.body.mobileNo,
            emailId: req.body.emailId,
            address: req.body.address,
            status: "Pending"
        })

        await newAccount.save()

        let met = {
            status: "success",
            message: "New Demo User Created Successfully !!!",
        }
        res.send(met)
    } catch (err) {
        let met = {
            status: "Failure",
            message: err.message,
        }
        res.status(400)
        res.send(met)
    }
}

const getDemoAcDetails = async (req, res) => {
    try {
        const data = await AccDetails.find({ status: "Pending" })
        res.send(data)
    } catch (error) {
        let met = {
            status: "Failure",
            message: err.message,
        }
        res.status(400)
        res.send(met)
    }
}

const sendEmailAcDetails = async (req, res) => {
    if (req.body._id && req.body.userId && req.body.password) {

        const startDate = new Date("2024-04-17T00:00:00.000Z");
        const endDate = new Date("2024-04-20T23:59:59.999Z");

        try {
            // const data = await AccDetails.findByIdAndUpdate({ _id: req.body._id }, { userId: req.body.userId, password: req.body.password, status: "Approved", lastUpdatedTimeStamp: new Date() });
            const data = AccDetails.updateMany({ "lastUpdatedTimeStamp": { "$gte": startDate, "$lte": endDate } }, { $set: { status: 'Approved' } })
            res.send(data)
        } catch (error) {
            let met = {
                status: "Failure",
                message: error.message,
            }
            res.status(400)
            res.send(met)
        }
    } else {
        let met = {
            status: "Failure",
            message: "Please Fill all mandatory fields !!!",
        }
        res.status(400)
        res.send(met)
    }
}

const schedularUpdateDetails = async (req, res) => {
    console.log("Running");
    let currentDate = new Date()
    // db.demoaccdetails.updateMany({ "lastUpdatedTimeStamp": { "$gte": ISODate("2024-04-17"), "$lte": ISODate("2024-04-20") }}, { $set: { status: 'Active' } })
    const startDate = new Date("2024-04-17T00:00:00.000Z");
    const endDate = new Date("2024-04-20T23:59:59.999Z");
    try {
        // const data = AccDetails.updateMany({ "lastUpdatedTimeStamp": { "$gte": ISODate("2024-04-17"), "$lte": ISODate("2024-04-20") } }, { $set: { status: 'Approved' } })
        const data = AccDetails.updateMany({ "lastUpdatedTimeStamp": { "$gte": startDate, "$lte": endDate } }, { $set: { status: 'Approved' } })
        // console.log(123, data);
    } catch (error) {
        res.send("Failed")
    }
}
// how to compare two dates in mongodb and update the data using query
// "Converting circular structure to JSON\n    --> starting at object with constructor 'MongoClient'\n    |     property 's' -> object with constructor 'Object'\n    |     property 'sessionPool' -> object with constructor 'ServerSessionPool'\n    --- property 'client' closes the circle"
//  in mongoose

module.exports = { saveDemoAcDetails, getDemoAcDetails, sendEmailAcDetails, schedularUpdateDetails }