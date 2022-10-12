const sequelize = require('../config/connection');
const { Comment, Post, User} = require('../models');


const postSeeds = require('./postInfo');
const commentSeeds = require('./commentInfo');
const userSeeds = require('./userInfo');

const allSeeds = async () => {
    await sequelize.sync({force: true});

    await Post.bulkCreate(postSeeds, {
        individualHooks: true,
        returning: true
    });

    await Comment.bulkCreate(commentSeeds, {
        individualHooks: true,
        returning: true
    });

    await User.bulkCreate(userSeeds, {
        individualHooks: true,
        returning: true
    });

    process.exit(0);
};

allSeeds();