const router = require("express").Router();
const { Review, Wine, User} = require("../models");
const withAuth = require('../utils/auth');

// Route to get all reviews for homepage
router.get('/', async (req, res) => {
  try {
  const reviewData = await Review.findAll().catch((err) => {
    res.json(err);
    });

    const reviews = reviewData.map((review) => review.get({ plain: true }));
 
    // Send over the 'loggedIn' session variable to the 'homepage' template
    res.render('homepage', {
      reviews, 
      loggedIn: req.session.loggedIn
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Route to get one review
router.get('/review/:id', async (req, res) => {
  try {
    // Search the database for a dish with an id that matches params
    const reviewData = await Review.findByPk(req.params.id);
    console.log(reviewData)
    // We use .get({ plain: true }) on the object to serialize it so that it only includes the data that we need. 
    const review = reviewData.get({ plain: true });
    // Then, the 'dish' template is rendered and dish is passed into the template.
    res.render('reviewpage', review);
    } catch (err) {
        res.status(500).json(err);
    }
  });
  

// According to MVC, what is the role of this action method?
// This action method is the Controller. It accepts input and sends data to the Model and the View.
router.put('/:id', async (req, res) => {
  // Where is this action method sending the data from the body of the fetch request? Why?
  // It is sending the data to the Model so that one review can be updated with new data in the database.
  try {
    const review = await Review.update(
      {
        review_title: req.body.title,
        description: req.body.description,
        guest_name: req.body.taster_name,
        has_nuts: req.body.is_twenty_one,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    // If the database is updated successfully, what happens to the updated data below?
    // The updated data (dish) is then sent back to handler that dispatched the fetch request.
    res.status(200).json(review);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
// router.get('/review', withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: Review }],
//     });

//     const user = userData.get({ plain: true });

//     res.render('reviewpage', {
//       ...user,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// Login route
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // Otherwise, render the 'login' template
  res.render('login');
});

module.exports = router;
