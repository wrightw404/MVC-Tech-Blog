const {Post} = require('../models/Post');

const postData = [
    {
        title: 'Good Post',
        post_body: 'this is a good post',
        user_id: '1'
    },
    {
        title: 'Really Good Post',
        post_body: 'this is a really good post',
        user_id: '2'
    },
    {
        title: 'The Best Post',
        post_body: 'this is the best post',
        user_id: '3'
    }
]

const postSeeds = () => Post.bulkCreate(postData);

module.exports = postSeeds;