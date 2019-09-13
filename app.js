let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let users=require('./routers/users');
let cars=require('./routers/cars');


let app = express();

app.use(bodyParser.json());

let url = "mongodb://localhost:27017/week7lec1";
mongoose.connect(url,{ useNewUrlParser: true ,useUnifiedTopology: true }, function (err) {
    if (err) console.log(err);
    else
        console.log('DB Connected!!!');

});


// get all users
app.get('/users',users.getAllUsers);
app.get('/users/cars',users.getUsersCars);
app.post('/users',users.addUser);



// cars

app.get('/cars',cars.getCars);
app.post('/cars',cars.addCar);
app.post('/cars/adduser',cars.addUser);

app.listen(8080);

