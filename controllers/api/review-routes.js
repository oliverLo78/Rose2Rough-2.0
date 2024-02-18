const router = require("express").Router();
// Import the models
const Review = require("../../models/Review");

// route to create/add a review using async/await
router.post('/', async (req, res) => {
    try { 
      const reviewData = await Review.create({
      title: req.body.title,
      description: req.body.description,
      taster_name: req.body.taster_name,
      is_twenty_one: req.body.is_twenty_one,
     });
     
    res.status(200).json(reviewData)
  } catch (err) {
    res.status(400).json(err);
  }
  });
  
// TODO: According to MVC, what is the role of this action method?
// This action method is the Controller. It accepts input and sends data to the Model and the View.
  router.put('/:id', async (req, res) => {
    // TODO: Where is this action method sending the data from the body of the fetch request? Why?
      // It is sending the data to the Model so that one review can be updated with new data in the database.
    try {
      const review = await Review.update({
        title: req.body.title,
        description: req.body.description,
        taster_name: req.body.taster_name,
        is_twenty_one: req.body.is_twenty_one,
      },
      {
        where: {
          id: req.params.id,
        },
      });
      // TODO: If the database is updated successfully, what happens to the updated data below?
      // The updated data (dish) is then sent back to handler that dispatched the fetch request.
      res.status(200).json(review);
    } catch (err) {
        res.status(500).json(err);
      };
  });

// // Delete a review
router.delete("/", async (req, res) => {
    try {
        const reviewData = await Review.destroy({
            where: {
                id: req.body.id,
            },
        });

        if (!reviewData) {
            res.status(404).json({ message: "No review found with that id" });
            return;
        }

        res.status(200).json(reviewData);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

module.exports = router;
























