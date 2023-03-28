const router = require("express").Router();
const { User, Review } = require("../../models");
const withAuth = require("../../utils/auth");

// Get a list of reviews for the user with id = :id
router.get("/:id", async (req, res) => {
    try {
        const userData = await Review.findAll({
            where: {
                user_id: req.params.id,
            },
            order: [["createdAt", "ASC"]],
        });
        if (!userData) {
            res.status(404).json({
                message: `No user found with id: ${req.params.id}`,
            });
            return;
        }
        res.status(200).json(userData);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// Create a new review
router.post("/", withAuth, async (req, res) => {
    try {
        const reviewData = await Review.create({
            user_id: req.session.user_id,
            deck_name: req.body.deck_name,
        });
        req.session.save(() => {
            req.session.logged_in = true;
            res.status(200).json(reviewData);
    });
    } catch (err) {
        console.error(err);
        res.status(400).json(err);
    }
});

// Update an existing review
router.put("/", withAuth, async (req, res) => {
    try {
        const reviewData = await Review.update(req.body, {
            where: {
                id: req.body.id,
            },
        });

        if (!reviewData) {
            res.status(400).json({
                message: "Review does not exist. Please create it first.",
            });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// Delete a review
router.delete("/", withAuth, async (req, res) => {
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