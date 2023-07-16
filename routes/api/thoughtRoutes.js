const router = require('express').Router();
const Thought = require('../../models/Thought');


// /api/thoughts

// GET to get all thoughts
router.get('/', async (req, res) => {
    const thoughts = await Thought.find({});
    res.json(thoughts);
});

// GET to get a single thought by it's _id
// POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)

// // example data
// {
//     "thoughtText": "Here's a cool thought...",
//     "username": "lernantino",
//     "userId": "5edff358a0fcb779aa7b118b"
//  }


// PUT to update a user by its _id
// DELETE to remove a user by its _id

// /api/thoughts/:thoughtId/reactions

// POST to create a reaction stored in a single thoughts REACTIONS array field
// DELETE to pull and remoce a reaction by the reaction;s REACTIONID value