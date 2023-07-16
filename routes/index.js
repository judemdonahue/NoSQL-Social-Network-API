const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// Error handling middleware
router.use((err, req, res, next) => {
  console.error(err); // Log the error for debugging purposes
  res.status(500).send('Something went wrong!');
});

module.exports = router;