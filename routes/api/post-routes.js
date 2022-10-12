const router = require('express').Router();
const { Post } = require('../../models/');
const withAuth = require('../../utils/auth');
//const sequelize = require('../../config/connection');

router.get('/', async (req, res) => {
try { 
const postData = await Post.findAll();
    
const posts = postData.map((post) => post.get({ plain: true }));
  
     res.render('all-posts', { posts, loggedIn: req.session.loggedIn });
     } catch (err) {
      res.status(500).json(err);
    }
   });



router.post('/', withAuth, async (req, res) => {
  const body = req.post_body;

  try {
    const newPost = await Post.create({ ...body, user_id: req.session.user_id });
    res.json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
  try {
    const [affectedRows] = await Post.update(req.post_body, {
      where: {
        id: req.params.id,
      },
    });

    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const [affectedRows] = Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;