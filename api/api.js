var router = require('express').Router();

// api router will mount other routers
// for all our resources


router.use('/abouts', require('./about/aboutRoutes'));
router.use('/dvas', require('./dva/dvaRoutes'));

module.exports = router;
