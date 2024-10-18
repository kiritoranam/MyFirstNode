
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const jsonData = require('./user.json');
const fs = require('fs');
const os = require('os');
const Path = require('path');

console.log("kernal", os.platform())
console.log("kernal", os.hostname())

console.log('path', Path.basename('F:/createNodeJs/myapp/PostApi.js'))

const app = express();
const port = 8080;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/PostApi', (req, res) => {

  // var data = fs.readFileSync('user.json');
  // var myObject = JSON.parse(data);
  // console.log("myObject", myObject);
  let myObject;
  myObject.push(req.body);

  var newData = JSON.stringify(myObject);
  fs.writeFile('user.json', newData, (err, item) => {
    // error checking
    if (err) throw err;

    console.log("New data added Successfully !!!"); 
  });


  res.send('yup !!! Successfully Added.....');

});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))