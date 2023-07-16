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

module.exports = router;
// GET a single user by its '_id' and populated thought and friend data
// POST a new user

// // example data
// {
//     "username": "lernantino",
//     "email": "lernantino@gmail.com"
//  }

// PUT to update a user by its _id
// DELETE to remove a user by its _id

// BONUS: Remove a user's associated thoughts when deleted.


// /api/users/:userId/friends/:friendId

// POST to add a new friend user's from a friend list
// DELETE to remove a friend from a user's friend list

