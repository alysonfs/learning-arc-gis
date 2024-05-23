const express = require('express')
const router = express.Router()

/* GET sample 1 Page. */
router.get('/', (req, res, next) => {
  res.render('sample1/index', {title: 'Intro to MapView - Create a 2D Map | Sample | ArcGIS Maps SDK for JavaScript 4.25'})
})

module.exports = router