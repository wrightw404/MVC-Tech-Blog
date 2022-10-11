const sequelize = require('../config/connection');
//const { Comment, Post, User} = require('../models');

const postSeeds = require('./postInfo.json');
const commentSeeds = require('./commentInfo.json');
const userSeeds = require('./userInfo.json');

const allSeeds = async () => {
    await sequelize.sync({force: true});

    await postSeeds();
    await commentSeeds();
    await userSeeds();

    process.exit(0);
};

allSeeds();