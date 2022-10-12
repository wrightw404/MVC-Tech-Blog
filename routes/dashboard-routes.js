const router = require('express').Router();
const sequelize = require('../config/connection')
const { Post, User, Comment } = require('../models/');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: {
        userId: req.session.userId,
      },
        attributes: [
          'id',
          'post_body',
          'title',
          'created_at',
        ],
        include: [
          {
            model: Comment,
            attributes: ['id','comment_body', 'post_id', 'user_id', 'created_at'],
            include: {
              model: User, 
              attributes: ['username']
            }
          },
          {
            model: User,
            attributes: ['username']
          },
        ],

    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('all-posts-admin', {
      layout: 'dashboard',
      posts, 
    });
  } catch (err) {
    res.redirect('login');
  }
});

router.get('/new', withAuth, (req, res) => {
  res.render('new-post', {
    layout: 'dashboard',
  });
});

router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);

    if (postData) {
      const post = postData.get({ plain: true });

      res.render('edit-post', {
        layout: 'dashboard',
        post, 
        loggedIn: true,
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.redirect('login');
  }
});

module.exports = router;