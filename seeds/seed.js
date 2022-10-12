const sequelize = require('../config/connection');
//const { Comment, Post, User} = require('../models');

const postSeeds = require('./postInfo.js');
const commentSeeds = require('./commentInfo.js');
const userSeeds = require('./userInfo.js');

const allSeeds = async () => {
    await sequelize.sync({force: true});

    await postSeeds();
    await commentSeeds();
    await userSeeds();

    process.exit(0);
};

allSeeds();