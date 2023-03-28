const router = require("express").Router();
const { Review } = require("../../models");
const withAuth = require("../../utils/auth");

// get single review
router.get("/:id", async (req, res) => {
    try {
        // Search the database for a deck with an id that matches params
        const reviewData = await Deck.findByPk(req.params.id);

        // serialize the data
        const reviewlist = reviewData.get({ plain: true });
        res.render("reviewlist", reviewlist);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Make changes to an existing review
router.put("/", withAuth, async (req, res) => {
    try {
        const review = await Review.findByPk(req.body.deck_id);
        if (req.body.deck_name) {
            deck.deck_name = req.body.deck_name;
        }
        if (req.body.deck_list) {
            deck.deck_list = req.body.deck_list;
        }
        await deck.save();
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

module.exports = router;