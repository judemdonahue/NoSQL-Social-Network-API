const mongoose = require('mongoose');






//USERNAME
// -string
// -unique
// -required
//  -trimmed

//EMAIL
// -string
// -required
// -unique
// -must match a valid email address, (look into mongoose's matching validation)

// THOUGHTS
// - array of _id values referencing the Thought model

// friends
// - array of _id values referencing the User model (self reference)