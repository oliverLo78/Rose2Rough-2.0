const router = require("express").Router();
// Import the models
const  Review  = require("../../models/Review");
const withAuth = require("../../utils/auth");

// route to create/add a review using async/await
router.post('/', async (req, res) => {
    try { 
      const reviewData = await Review.create({
      review_title: req.body.review_title,
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
      const review = await Review.update(
      {
        review_title: req.body.review_title,
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


  module.exports = router;

// // Get a list of reviews for the user with id = :id
// router.get("/:id", async (req, res) => {
//     try {
//         const userData = await Review.findAll({
//             where: {
//                 user_id: req.params.id,
//             },
//             order: [["createdAt", "ASC"]],
//         });
//         if (!userData) {
//             res.status(404).json({
//                 message: `No user found with id: ${req.params.id}`,
//             });
//             return;
//         }
//         res.status(200).json(userData);
//     } catch (err) {
//         console.error(err);
//         res.status(500).json(err);
//     }
// });

// // Create a new review
// router.post("/", withAuth, async (req, res) => {
//     try {
//         const reviewData = await Review.create({
//             user_id: req.session.user_id,
//             deck_name: req.body.deck_name,
//         });
//         req.session.save(() => {
//             req.session.logged_in = true;
//             res.status(200).json(reviewData);
//     });
//     } catch (err) {
//         console.error(err);
//         res.status(400).json(err);
//     }
// });

// // Update an existing review
// router.put("/", withAuth, async (req, res) => {
//     try {
//         const reviewData = await Review.update(req.body, {
//             where: {
//                 id: req.body.id,
//             },
//         });

//         if (!reviewData) {
//             res.status(400).json({
//                 message: "Review does not exist. Please create it first.",
//             });
//         }
//     } catch (err) {
//         console.error(err);
//         res.status(500).json(err);
//     }
// });

// // Delete a review
// router.delete("/", withAuth, async (req, res) => {
//     try {
//         const reviewData = await Review.destroy({
//             where: {
//                 id: req.body.id,
//             },
//         });

//         if (!reviewData) {
//             res.status(404).json({ message: "No review found with that id" });
//             return;
//         }

//         res.status(200).json(reviewData);
//     } catch (err) {
//         console.error(err);
//         res.status(500).json(err);
//     }
// });


// // CREATE mulitple reviews
// router.post('/seed', (req, res) => {
//     Review.bulkCreate([
//         {
//             country: "US",
//             description: "This tremendous 100% varietal wine hails from Oakville and was aged over three years in oak. Juicy red-cherry fruit and a compelling hint of caramel greet the palate, framed by elegant, fine tannins and a subtle minty tone in the background. Balanced and rewarding from start to finish, it has years ahead of it to develop further nuance. Enjoy 2022–2030.",
//             designation: "Martha's Vineyard",
//             points: 96,
//             price: 235.0,
//             province: "California",
//             region_1: "Napa Valley",
//             region_2: "Napa",
//             taster_name: "Virginie Boone",
//             taster_twitter_handle: "@vboone",
//             title: "Heitz 2009 Martha's Vineyard Cabernet Sauvignon (Napa Valley)",
//             variety: "Cabernet Sauvignon",
//             winery: "Heitz",
//             user_id: 1
//         },
//         {
//             country: "US",
//             description: "Mac Watson honors the memory of a wine once made by his mother in this tremendously delicious, balanced and complex botrytised white. Dark gold in color, it layers toasted hazelnut, pear compote and orange peel flavors, reveling in the succulence of its 122 g/L of residual sugar.",
//             designation: "Special Selected Late Harvest",
//             points: 96,
//             price: 90.0,
//             province: "California",
//             region_1: "Knights Valley",
//             region_2: "Sonoma",
//             taster_name: "Jim Gordon",
//             taster_twitter_handle: "@gordone_cellars",
//             title: "Sweet Cheeks 2012 Vintner's Reserve Wild Child Block Pinot Noir (Willamette Valley)",
//             variety: "Pinot Noir",
//             winery: "Sweet Cheeks",
//             user_id: 2

//         },
//         {
//             country: "US",
//             description: "This spent 20 months in 30% new French oak, and incorporates fruit from Pommard and Swan clones. It's a robust, fleshy wine, with plump blackberry and black cherry flavors. Toasty oak scents of vanilla bean and coffee bean lead into a finish marked by brisk acidity.",
//             designation: "Vintner's Reserve Wild Child Block",
//             points: 90,
//             price: 65.0,
//             province: "Oregon",
//             region_1: "Willamette Valley",
//             region_2: "Willamette Valley",
//             taster_name: "Paul Gregutt",
//             taster_twitter_handle: "@paulgwine ",
//             title: "Sweet Cheeks 2012 Vintner's Reserve Wild Child Block Pinot Noir (Willamette Valley)",
//             variety: "Pinot Noir",
//             winery: "Sweet Cheeks",
//             user_id: 3
//         },
//         {
//             country: "France",
//             description: "This is the top wine from La Bégude, named after the highest point in the vineyard at 1200 feet. It's a powerful expression of the complex flavors that can come from this limestone terroir, with concentrated fruit that needs to age. Drink from 2018.",
//             designation: "Vintner's Reserve Wild Child Block",
//             points: 90,
//             price: 65.0,
//             province: "Oregon",
//             region_1: "Willamette Valley",
//             region_2: "Willamette Valley",
//             taster_name: "Paul Gregutt",
//             taster_twitter_handle: "@paulgwine ",
//             title: "Sweet Cheeks 2012 Vintner's Reserve Wild Child Block Pinot Noir (Willamette Valley)",
//             variety: "Pinot Noir",
//             winery: "Sweet Cheeks",
//             user_id: 4
//         }
//     ]).then(function () {
//         res.send('Database seeded!');
//     }).catch(function (err) {
//         console.log(err);
//         res.json(err);
//     });
// });


