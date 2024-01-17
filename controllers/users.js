const User = require('../models/users'); // Import users model

exports.createUser = async (req, res) => {
    const now = new Date()

    if (await User.countDocuments({"userEmail": req.body.userEmail}) === 0){
        const newUser = new User({
            userEmail: req.body.userEmail,
            lastLogin: now
        })
        newUser.save()
        .then(() => {
            res.sendStatus(200)
        })
        .catch(err => {
            res.sendStatus(500)
        })
    } else {
        await User.findOneAndUpdate({"userEmail": req.body.userEmail}, {lastLogin: now})
        res.sendStatus(200)
    }
}