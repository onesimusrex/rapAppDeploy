var express = require('express');
var router = express.Router();
var Profile = require('../models/Profile');
var mongoose = require('mongoose');






router.get('/work', function(req, res, next) {
  
  var nullifyEmptyStrings = function(queryString){
    if (queryString == ""){
      return null;
    }
    else {
      return queryString;
    };
  };

  surveyObject = {
    'jobTitleSa' : nullifyEmptyStrings(req.query.jobTitleSa),
    'jobTitleAm' : nullifyEmptyStrings(req.query.jobTitleAm),
    'jobTitleRc' : nullifyEmptyStrings(req.query.jobTitleRc),
    'jobTitleMa' : nullifyEmptyStrings(req.query.jobTitleMa),
    'jobTitleVd' : nullifyEmptyStrings(req.query.jobTitleVd),
    'jobTitleOt' : nullifyEmptyStrings(req.query.jobTitleOt),
    'ft' : nullifyEmptyStrings(req.query.ft),
    'pt' : nullifyEmptyStrings(req.query.pt),
    'preferFtY' : nullifyEmptyStrings(req.query.preferFtY),
    'preferFtN' : nullifyEmptyStrings(req.query.preferFtN),
    'satisfiedPayY' : nullifyEmptyStrings(req.query.satisfiedPayY),
    'satisfiedPayN' : nullifyEmptyStrings(req.query.satisfiedPayN),
    'payAmount' : nullifyEmptyStrings(req.query.payAmount),
    'benefitsFk' : nullifyEmptyStrings(req.query.benefitsFk),
    'benefitsHi' : nullifyEmptyStrings(req.query.benefitsHi),
    'benefitsCr' : nullifyEmptyStrings(req.query.benefitsCr),
    'benefitsEd' : nullifyEmptyStrings(req.query.benefitsEd),
    'benefitsOt' : nullifyEmptyStrings(req.query.benefitsOt),
    'schedulingY' : nullifyEmptyStrings(req.query.schedulingY),
    'schedulingN' : nullifyEmptyStrings(req.query.schedulingN),
    'schedulingOc' : nullifyEmptyStrings(req.query.schedulingOc),
    'schedulingNh' : nullifyEmptyStrings(req.query.schedulingNh),
    'schedulingCl' : nullifyEmptyStrings(req.query.schedulingCl),
    'schedulingNn' : nullifyEmptyStrings(req.query.schedulingNn),
    'schedulingOt' : nullifyEmptyStrings(req.query.schedulingOt),
    'canAdvanceY' : nullifyEmptyStrings(req.query.canAdvanceY),
    'canAdvanceN' : nullifyEmptyStrings(req.query.canAdvanceN),
    'openPositionsSa' : nullifyEmptyStrings(req.query.openPositionsSa),
    'openPositionsAm' : nullifyEmptyStrings(req.query.openPositionsAm),
    'openPositionsRs' : nullifyEmptyStrings(req.query.openPositionsRs),
    'openPositionsCs' : nullifyEmptyStrings(req.query.openPositionsCs),
    'openPositionsMa' : nullifyEmptyStrings(req.query.openPositionsMa),
    'openPositionsVd' : nullifyEmptyStrings(req.query.openPositionsVd),
    'openPositionsOt' : nullifyEmptyStrings(req.query.openPositionsOt),
    'discriminationY' : nullifyEmptyStrings(req.query.discriminationY),
    'discriminationN' : nullifyEmptyStrings(req.query.discriminationN),
    'discriminationNs' : nullifyEmptyStrings(req.query.discriminationNs),
    'workIssue' : nullifyEmptyStrings(req.query.workIssue),
    'workerName' : nullifyEmptyStrings(req.query.workerName),
    'workerContact' : nullifyEmptyStrings(req.query.workerContact),
    'comment' : nullifyEmptyStrings(req.query.comment),
    'teamMemberDisplay' : nullifyEmptyStrings(req.query.teamMemberDisplay),
    'storeSiteDisplay' : nullifyEmptyStrings(req.query.storeSiteDisplay),
    'dateNow' : nullifyEmptyStrings(req.query.dateNow)
  }

    //creates a surveydoc schema model document
    Profile.create(surveyObject, function(err, profile){
      if (err != null){
       res.render('error', err);
       return;
      }
    });


  res.send({success:surveyObject})
  // res.render('home',{name:':('})

});

router.get('/', function(req, res, next) {

  // res.render('home')
    // var idNumber = req.query.id;
    // var profile = profiles[idNumber];
    
    // if (profile == null) {
    //  var errorData = { 
    //    message: 'Error: could not find the profile with id ' + idNumber
    //  }

    //  res.render('error', errorData);
    //  return;
    // }

    // Profile.create(profile, function(err, profile){
    //  if (err != null){
    //    res.render('error', err);
    //    return;
    //  }

    //  res.render('index', profile.summary())
    //  return;
    // })

 
      // var firstName = req.query.name;


      // Profile.find({name:firstName}, function(err, result){
      //  if (err !=null){
      //    res.render('error', err);
      //    return;
      //  }

      //  var firstResult=result[0];

      //  res.render('home', firstResult);
      // });


    // if (req.query.key == 'name'){findFromURL('name')}
    // else if (req.query.key == 'city'){findFromURL('city')};

    res.render('home', {name:":)", favMovie:"The VVitch", city:"NYC"})

});


module.exports = router;
