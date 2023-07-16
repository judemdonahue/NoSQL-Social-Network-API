const express = require('express');
const router = express.Router();
const Thought = require('../../models/Thought');
// /api/thoughts

// GET to get all thoughts
router.get('/', async (req, res) => {
    const allThoughts = await Thought.find({});
    res.json(allThoughts);
});

// GET to get a single thought by it's _id
router.get('/:id', async (req, res) => {
    const singleThought = await Thought.findById(req.params.id);
    res.json(singleThought);
})

// POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
router.post('/', async (req, res) => {
    const newThought = await Thought.create(req.body);
    res.json(newThought);
})

// PUT to update a user by its _id
router.put('/:id', async (req, res) => {
    const updatedThought = await Thought.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedThought);
})

// DELETE to remove a user by its _id
router.delete('/:id', async (req, res) => {
    const deleteThought = await Thought.findByIdAndDelete(req.params.id);
    res.json(deleteThought);
});

// POST to create a reaction stored in a single thoughts REACTIONS array field
router.post('/:id/reactions', async (req, res) => {
    const thought = await Thought.findById(req.params.id);
    thought.reactions.push(req.body);
    await thought.save();
    res.json(thought);
});

// DELETE to pull and remoce a reaction by the reaction;s REACTIONID value
router.delete('/:id/reactions/:reactionId', async (req, res) => {
    const thought = await Thought.findById(req.params.id);
    thought.reactions = thought.reactions.filter(reaction => reaction.reactionId.toString() !== req.params.reactionId);
    await thought.save();
    res.json(thought);
});

module.exports = router;