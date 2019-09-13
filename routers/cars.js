let Car = require('../models/Car');
let User = require('../models/User');

module.exports = {
    getCars: function (req, res) {
        
        Car.find().exec(function (err, data) {
            if (err)
                res.json(err);
            else
                res.json(data);
        });
    },
    addCar: function (req, res) {
        let car = new Car(req.body);
        car.save(function (err) {
            if (err) res.json(err);
            else
                res.json({
                    msg: 'Car saved'
                });
        });
    },
    deleteCar: function (req, res) {

    },
    addUser: function (req, res) {
        let userId = req.query.userid;
       
        User.findOne({
            _id: userId
        }).exec(function (err, user) {
            if (err)
                res.json(err);
            else {
                console.log(user);
                
                let carId = req.body.id;
                Car.findOne({
                    _id: carId
                }, function (err, car) {
                    if (err)
                        res.json(err);
                    else {
                        car.users.push(user._id);
                        car.save(function (err) {
                            if (err)
                                res.json(err);
                            else
                                res.json({
                                    msg: 'Saved User in a car'
                                });
                        })
                    }
                })
            }

        })
    }
}