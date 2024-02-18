const router = require("express").Router();
const Review = require("../models/Review");

// Get all reviews for homepage
router.get('/', async (req, res) => {
  const reviewData = await Review.findAll().catch((err) => {
    res.json(err);
  });
  const reviews = reviewData.map((review) => review.get({ plain: true }));
  res.render('homepage', { reviews });
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
  // Where is this action method sending the data from the body of the fetch request? Why?
  // It is sending the data to the Model so that one review can be updated with new data in the database.

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
