const {Comment} = require('../models/User');

const commentData = [
    {
        comment_body: 'Very true',
        user_id: '1',
        post_id: '3'
    },
    {
        comment_body: 'Wow, I can see that',
        user_id: '2',
        post_id: '2'
    },
    {
        comment_body: 'How did you do this',
        user_id: '3',
        post_id: '1'
    },
    
]

const commentSeeds = () => Comment.bulkCreate(commentData);

module.exports = commentSeeds;