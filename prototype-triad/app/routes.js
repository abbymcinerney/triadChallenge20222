const express = require('express')
const router = express.Router()

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/service', function (req, res) {

    // Make a variable and give it the value from 'how-many-balls'
    var service = req.session.data['service']
  
    // Check whether the variable matches a condition
    if (service == "service1"){
      res.redirect('/homedelivery')
    } else if(service == "service2"){
      res.redirect('/collection_results')
    }else{
      res.redirect('/organisation_results')
    }
  
  })

  
module.exports = router
