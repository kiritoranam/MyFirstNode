const express = require('express');
var path = require('path')
const app = express();
const cors = require('cors');
var favicon = require('serve-favicon')
const cron = require('node-cron');
const nodemailer = require('nodemailer')
const fs = require('fs')
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(favicon(path.join(__dirname, 'public/favicon.ico')))
app.use(cors());

app.use(express.static('public'));

const auth = require('./Authentication/Authenticatetoken')
const login = require('./views/LoginApi')
const { getLoginUsers, mongooseTest, getMongooseTest } = require('./views/GetLoginUsers')
const middleware = require('./middleware');
const errorHandler = require('./Errorhandler');
const conn = require('./Database/Connection');
const UpdatePass = require('./views/UpdatePasswordApi');
const multer = require('multer');
const { uploadImgApi, getUploadImgApi } = require('./views/UploadImgApi')
const bodyParser = require("body-parser");
const { saveDemoAcDetails, getDemoAcDetails, sendEmailAcDetails, schedularUpdateDetails } = require('./views/DemoAc');

conn()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
// app.use(cron);

// cron.schedule('* * * * *', () => {
//     schedularUpdateDetails()
// });

// function sendReminderEmails() {

//     const transporter = nodemailer.createTransport({
//         host: 'smtp.ethereal.email',
//         port: 587,
//         auth: {
//             user: 'caleigh.goldner31@ethereal.email',
//             pass: 'YM777Y1f1UmUtCt1qW'
//         }
//     });

//     // Define email options
//     const mailOptions = {
//         from: 'caleigh.goldner31@ethereal.email',
//         to: 'shubham.g@fincaus.co.in', // Recipient email address
//         subject: 'Reminder: Complete Your Tasks',
//         text: 'This is a reminder to complete your tasks for today.',
//         html: "<b>Hello world?</b>",
//     };

//     // Send the email
//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             console.error('Error sending email:', error);
//         } else {
//             console.log('Reminder email sent:', info.response);
//         }
//     });
// }

async function readFrom() {

    const data = await fs.readFileSync('data.json')

}

readFrom()

app.get('/vw', (req, res) => {
    // res.render('index', { title: 'Hey', message: 'Hello there!' })
    res.send("Hello There")
})

const upload = multer({ dest: 'uploads/' });

app.use('/login', login)
app.use('/getLoginUsers', getLoginUsers);
app.use('/updatePassword', UpdatePass);
app.use('/uploadImgApi', upload.single("image"), uploadImgApi);
app.use('/getUploadImgApi', getUploadImgApi);
app.use('/middleware', auth, middleware);
app.use('/errorHandler', errorHandler);

// Test mongoose
app.use('/mongooseTest', mongooseTest)
app.use('/getMongooseTest', getMongooseTest)

// Demo Account

app.use('/saveDemoAcDetails', saveDemoAcDetails);
app.use('/getDemoAccDetails', getDemoAcDetails);
app.use('/sendEmailAcDetails', sendEmailAcDetails)

app.listen('8080', () => {
    console.log("listening to your port with zipppp...");
})