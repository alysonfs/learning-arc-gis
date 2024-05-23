const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('home/index', {title: 'Learning ArcGIS API for JavaScript'});
});

module.exports = router;
