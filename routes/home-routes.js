const router = require('express').Router();
const { Post, Comment, User } = require('../models/');

// get all posts for homepage
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      attributes: [
        'id',
        'post_body',
        'title',
        'created_at',
      ],
      order: [
        [ 'created_at', 'DESC']
      ],
      include: [
        {
          model: User,
          attributes: ['username']
        },
        {
          model: Comment,
          attributes: ['id','comment_body', 'post_id', 'user_id', 'created_at'],
          include: {
            model: User, 
            attributes: ['username']
          }
        }
      ],

    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('all-posts', { posts, loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

// get single post
router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      attributes: [
        'id',
        'post_body',
        'title',
        'created_at',
      ],
      include: [
        {
          model: User,
          attributes: ['username']
        },
        {
          model: Comment,
          attributes: ['id','comment_body', 'post_id', 'user_id', 'created_at'],
          include: {
            model: User, 
            attributes: ['username']
          }
        }
      ],
    });

    if (postData) {
      const post = postData.get({ plain: true });

      res.render('single-post', { post, loggedIn: req.session.loggedIn });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

module.exports = router;