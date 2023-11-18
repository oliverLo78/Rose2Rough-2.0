// const router = require("express").Router();
// // Import the models
// const  { Review, Cellar }  = require("../../models/Review");
// const withAuth = require("../../utils/auth");

// // Get all Cellars for homepage
// router.get('/', async (req, res) => {
//   try {
//     const dbCellarData = await Cellar.findAll({
//       include: [
//         {
//           model: Review,
//           attributes: ['title', 'description'],
//         },
//       ],
//     });

//     const cellars = dbCellarData.map((cellar) =>
//       cellar.get({ plain: true })
//     );

//     req.session.save(() => {
//       // We set up a session variable to count the number of times we visit the homepage
//       if (req.session.countVisit) {
//         // If the 'countVisit' session variable already exists, increment it by 1
//         req.session.countVisit++;
//       } else {
//         // If the 'countVisit' session variable doesn't exist, set it to 1
//         req.session.countVisit = 1;
//       }

//       res.render('homepage', {
//         cellars,
//         loggedIn: req.session.loggedIn,
//         countVisit: req.session.countVisit,
//       });
//     });
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
//   });

// // GET one cellar
// // Use the custom middleware before allowing the user to access the gallery
// router.get('/cellar/:id', withAuth, async (req, res) => {
//   try {
//     const dbCellarData = await Cellar.findByPk(req.params.id, {
//       include: [
//         {
//           model: Review,
//           attributes: [
//             'id',
//             'title',
//             'description',
//             'taster_name',
//           ],
//         },
//       ],
//     });

//     const cellar = dbCellarData.get({ plain: true });
//     res.render('cellar', { 
//       reviewpage, 
//       loggedIn: req.session.loggedIn,
//       countVisit: req.session.countVisit,
//      });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// // GET one review
// // Use the custom middleware before allowing the user to access the review
// router.get('/review/:id', withAuth, async (req, res) => {
//   try {
//     const dbReviewData = await Review.findByPk(req.params.id);

//     const review = dbReviewData.get({ plain: true });

//     res.render('review', { 
//       review, 
//       loggedIn: req.session.loggedIn,
//       countVisit: req.session.countVisit,
//      });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// // route to create/add a review using async/await
// router.post('/', async (req, res) => {
//     try { 
//       const reviewData = await Review.create(
//       {
//       review_title: req.body.title,
//       description: req.body.description,
//       taster_name: req.body.taster_name,
//       is_twenty_one: req.body.is_twenty_one,
//      });
     
//     res.status(200).json(reviewData)
//   } catch (err) {
//     res.status(400).json(err);
//   }
//   });
  
//   // TODO: According to MVC, what is the role of this action method?
//   // This action method is the Controller. It accepts input and sends data to the Model and the View.
//   router.put('/:id', async (req, res) => {
//     // TODO: Where is this action method sending the data from the body of the fetch request? Why?
//       // It is sending the data to the Model so that one review can be updated with new data in the database.
//     try {
//       const review = await Review.update(
//       {
//         review_title: req.body.title,
//         description: req.body.description,
//         taster_name: req.body.taster_name,
//         is_twenty_one: req.body.is_twenty_one,
//       },
//       {
//         where: {
//           id: req.params.id,
//         },
//       });
//       // TODO: If the database is updated successfully, what happens to the updated data below?
//       // The updated data (dish) is then sent back to handler that dispatched the fetch request.
//       res.status(200).json(review);
//     } catch (err) {
//         res.status(500).json(err);
//       };
//   });

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

// module.exports = router;




