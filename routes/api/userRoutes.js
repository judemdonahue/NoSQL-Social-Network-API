const express = require('express');
const router = express.Router();
const User = require('../../models/User');
// API ROUTES

//  /api/users

// GET all users
router.get('/', async (req, res) => {
    const users = await User.find({});
    res.json(users);
});


// GET a single user by its '_id' and populated thought and friend data
router.get('/:id', async (req, res) => {
    const singleUser = await User.findById(req.params.id);
    res.json(singleUser);
});

// POST a new user
router.post('/', async (req, res) => {
    const newUser = await User.create(req.body);
    res.json(newUser);
});

// PUT to update a user by its _id
router.put('/:id', async (req, res) => {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedUser);
})

// DELETE to remove a user by its _id
router.delete('/:id', async (req, res) => {
    const deleteUser = await User.findByIdAndDelete(req.params.id);
    res.json(deleteUser);
});

// BONUS: Remove a user's associated thoughts when deleted.


// /api/users/:userId/friends/:friendId

// POST to add a new friend user's from a friend list
router.post('/:id/friends', async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
    return res.status(404).json({ message: 'No user with this id!' });
  }
  user.friends.push(req.params.friendId);
  await user.save();
  res.json(user);
});

// DELETE to remove a friend from a user's friend list
router.delete('/:id/friends/:friendId', async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).json({ message: 'No user with this id!' });
  }
  user.friends = user.friends.filter((friendId) => friendId.toString() !== req.params.friendId);
  await user.save();
  res.json(user);
});

module.exports = router;