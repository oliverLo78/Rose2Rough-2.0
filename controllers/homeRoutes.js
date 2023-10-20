const router = require("express").Router();
const { Review } = require("../models/Review");

// Route to get all reviews
router.get('/', async (req, res) => {
  const reviewData = await Review.findAll().catch((err) => {
    res.json(err);
    });
    const reviews = reviewData.map((review) => review.get({ plain: true }));
    res.render('homepage', { reviews });
    console.log(reviews);
  });

// Route to get one review
router.get('/review/:id', async (req, res) => {
  try{
    const reviewData = await Review.findByPk(req.params.id);
    if(!reviewData) {
      res.status(404).json({ message: 'No review found with this id!' });
      return;
    }
    const review = reviewData.get({ plain: true });
    res.render('review', review);
  } catch (err) {
    res.status(500).json(err);
  };
});


// According to MVC, what is the role of this action method?
// This action method is the Controller. It accepts input and sends data to the Model and the View.
router.put('/:id', async (req, res) => {
  // Where is this action method sending the data from the body of the fetch request? Why?
  // It is sending the data to the Model so that one review can be updated with new data in the database.
  try {
    const review = await Review.update(
      {
        dish_name: req.body.review_title,
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

module.exports = router;
