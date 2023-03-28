const router = require("express").Router();
const { Review, User } = require("../models");
const withAuth = require('../../utils/auth');

// GET route for homepage
router.get("/", async (req, res) => {
  const randomReviews = [];
  for (let i = 0; i < 5; i++) {
    const review = await Review.random();
    randomReviews.push(review);
  }
  console.log(randomReviews);
  res.render("homepage", { ...randomReviews, logged_in: req.session.logged_in });
});

// middleware requiring authorization access to route
router.get("/review", withAuth, async (req, res) => {
  try {
      const userData = await User.findByPk(req.session.user_id, {
          attributes: { exclude: ["password"] },
          include: [{ model: Review }],
      });

      const user = userData.get({ plain: true });
      console.log(userData);

      res.render("reviews", {
          ...user,
          logged_in: true,
      });
  } catch (err) {
      res.status(500).json(err);
  }
});

// GET a single review
router.get("/review/:id", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Review }]
    });

  const user = userData.get({ plain: true });
  console.log(user);
  let review;
  user.reviews.forEach((element) => {
    if (element.id == req.params.id) {
      review = element;
    }
  });

    if (review) {
      res.render("review", review);
    } else {
      res.status(404).json({
        message: `A review with id: ${req.params.id} does not exist`,
      });
    }
  } catch (err) {
    res.status(500).json(err);
  }
}); 

router.get("/login", (req, res) => {
  if (req. session.logged_in) {
    res.redirect('/reviews');
    return;
  }
 
  res.render('login');
});

router.get("/signup", (req, res) => {
  if (req. session.logged_in) {
    res.redirect('/reviews');
    return;
  }
 
  res.render('signup');
});

module.exports = router;
