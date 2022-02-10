const express = require('express')
const router = express.Router()

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/test', function (req, res) {

    // Make a variable and give it the value from 'how-many-balls'
    var service = req.session.data['service']
  
    // Check whether the variable matches a condition
    if (service == "service1"){
      // Send user to next page
      res.redirect('/homedelivery')
    } else {
      // Send user to ineligible page
      res.redirect('/start')
    }
  
  })

  
module.exports = router
