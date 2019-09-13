let User = require('../models/User');
let Car=require('../models/Car');
module.exports = {
    getAllUsers: function (req, res) {

        User.find().exec(function (err, data) {
            res.json(data);
        });
    },
    getUsersCars: function (req, res) {
        res.json({
            name: 'Tim',
            age: 23
        });
    },
    addUser: function (req, res) {
        let user = new User(req.body);
        user.save(function (err) {
            if (err)
                res.json(err);
            else
                res.json({
                    msg: 'Saved !!!!'
                });
        });
    }
}