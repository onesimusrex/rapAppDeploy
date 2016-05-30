
//import mongoose
var mongoose = require('mongoose');


// mongoose.models = {};
// mongoose.modelSchemas = {};
//create a profile class
var SurveyDocSchema = new mongoose.Schema({
    jobTitleSa : {type: String},
    jobTitleAm : {type: String},
    jobTitleRc : {type: String},
    jobTitleMa : {type: String},
    jobTitleVd : {type: String},
    jobTitleOt : {type: String},
    ft : {type: String},
    pt : {type: String},
    preferFtY : {type: String},
    preferFtN : {type: String},
    satisfiedPayY : {type: String},
    satisfiedPayN : {type: String},
    payAmount : {type: String},
    benefitsFk : {type: String},
    benefitsHi : {type: String},
    benefitsCr : {type: String},
    benefitsEd : {type: String},
    benefitsOt : {type: String},
    schedulingY : {type: String},
    schedulingN : {type: String},
    schedulingOc : {type: String},
    schedulingNh : {type: String},
    schedulingCl : {type: String},
    schedulingNn : {type: String},
    schedulingOt : {type: String},
    canAdvanceY : {type: String},
    canAdvanceN : {type: String},
    openPositionsSa : {type: String},
    openPositionsAm : {type: String},
    openPositionsRs : {type: String},
    openPositionsCs : {type: String},
    openPositionsMa : {type: String},
    openPositionsVd : {type: String},
    openPositionsOt : {type: String},
    discriminationY : {type: String},
    discriminationN : {type: String},
    discriminationNs : {type: String},
    workIssue : {type: String},
    workerName : {type: String},
    workerContact : {type: String},
    comment : {type: String},
    teamMemberDisplay : {type: String},
    storeSiteDisplay : {type: String},
    dateNow : {type: String}
});

//this method returns a profile's name and _id
// ProfileSchema.methods.summary = function() {
// 	var summary = {
// 		'name':this.name,
// 		'city':this.city,
// 		'favMovie':this.favMovie,
// 		'id':this._id
// 	};

// 	return summary;
// };

//create is a built in method from the schema class, create profile passes in characteristics from 

//boilerplate code that packages all your stuff into profile schema
//this packages the ProfileSchema subclass into 'ProfileSchema'
module.exports = mongoose.model('SurveyDocSchema', SurveyDocSchema);