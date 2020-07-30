const router = require('express').Router();
let User = require('../models/user.model')

//http get request
router.route('/').get((req,res) => {
    User.find() // mongoose method to get the list of all the users from mongodb atlas database
    .then(user => res.json(user))
    .catch(err => res.status(400). json('Error: ' + err));

});

router.route('/add').post((req,res) => {
    const username = req.body.username;

    const newUser = new User({username});

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res. status(400).json('Error: ' + err));      
});

module.exports = router;
