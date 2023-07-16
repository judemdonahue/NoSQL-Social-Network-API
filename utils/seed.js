const connection = require('../config/connection');
const { User, Thought } = require('../models');

const seedDB = async () => {
  try {
    // Start fresh by deleting everything
    await Promise.all([User.deleteMany({}), Thought.deleteMany({})]);

    // Create some users
    const users = Array.from({ length: 5 }, (_, i) => ({
      username: `user${i + 1}`,
      email: `user${i + 1}@example.com`,
    }));
    const createdUsers = await User.create(users);

    // Create some thoughts and assign to users
    const thoughts = Array.from({ length: 10 }, (_, i) => ({
      thoughtText: `Thought ${i + 1}`,
      username: createdUsers[i % 5].username,
    }));
    const createdThoughts = await Thought.create(thoughts);

    // Update users with thoughts
    for (let i = 0; i < 10; i++) {
      const thought = createdThoughts[i];
      const userIndex = i % 5;
      createdUsers[userIndex].thoughts.push(thought._id);
      await createdUsers[userIndex].save();
    }

    // Add reactions to thoughts
    for (let i = 0; i < 10; i++) {
      const thought = createdThoughts[i];
      thought.reactions.push(
        {
          reactionBody: 'Wow this is actually such an amazing thought!',
          username: createdUsers[(i + 1) % 5].username,
        },
        {
          reactionBody: 'I sure do wish my brain had thoughts like this one right here!',
          username: createdUsers[(i + 2) % 5].username,
        }
      );
      await thought.save();
    }

    // Close the connection
    connection.close();
  } catch (error) {
    console.error(error);
  }
};

seedDB();
