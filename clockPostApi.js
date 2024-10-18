const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const os = require('os')

const app = express();
const port = 5000;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(bodyParser.text());

app.post('/ClockPostApi', (req, res) => {
    console.log("reqqqqqq", req)
    console.log("req.body", req.body)
    // var data = fs.readFileSync('user.json');
    // var myObject = JSON.parse(data);
    // console.log("myObject", myObject);

    // myObject.push(req.body);

    // var newData = JSON.stringify(myObject);

    // fs.writeFile('user.json', newData, (err) => {
    //     console.log("err", err)
    // })

    res.send("Yup !!! Data has been Added Successfully")
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))