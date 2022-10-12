const {User} = require('../models/User');

const userData = [
    {
        username: 'Will',
        email: 'will@gmail.com',
        password: 'password1'
    },
    {
        username: 'Bill',
        email: 'bill@gmail.com',
        password: 'password2'
    },
    {
        username: 'Ruby',
        email: 'ruby@gmail.com',
        password: 'password3'
    },
]

const userSeeds = () => User.bulkCreate(userData);

module.exports = userSeeds;