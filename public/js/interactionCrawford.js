$(".clickable").click(function(event){
	// event.preventDefault();
	$(this).toggleClass('active');
});

$(".clickableNav").click(function(event){
	// event.preventDefault();
	var clicker = $(this)
	$('.clickableNav').each(function(){
		if ($(this) != clicker){
			$(this).removeClass('active');
		}
	});

	$(this).toggleClass('active');
	var teamMemberDisplay = $(this).text()
	$(".teamMemberDisplay").text(teamMemberDisplay)

	Cookies.set('teamMemberDisplay',teamMemberDisplay)
});

$(".clickableNavStore").click(function(event){
	// event.preventDefault();
	var clicker = $(this)
	$('.clickableNavStore').each(function(){
		if ($(this) != clicker){
			$(this).removeClass('active');
		}
	});

	$(this).toggleClass('active');
	var storeSiteDisplay = $(this).text()
	$(".storeSiteDisplay").text(storeSiteDisplay)

	Cookies.set('storeSiteDisplay',storeSiteDisplay)
});



// Cookies.remove('teamMemberDisplay');
// Cookies.remove('storeSiteDisplay');

var teamMemberDisplay = Cookies.get('teamMemberDisplay') || 'select name';
$(".teamMemberDisplay").text(teamMemberDisplay);

var storeSiteDisplay = Cookies.get('storeSiteDisplay') || 'and store';
$(".storeSiteDisplay").text(storeSiteDisplay);


function surveyResponseClass() {
	this.jobTitleSa = getJobTitleSa;
	this.jobTitleAm = getJobTitleAm;
	this.jobTitleRc = getJobTitleRc;
	this.jobTitleMa = getJobTitleMa;
	this.jobTitleVd = getJobTitleVd;
	this.jobTitleOt = getJobTitleOt;
	this.ft = getFt;
	this.pt = getPt;
	this.preferFtY = getPreferFtY;
	this.preferFtN = getPreferFtN;
	this.satisfiedPayY = getSatisfiedPayY;
	this.satisfiedPayN = getSatisfiedPayN;
	this.payAmount = getPayAmount;
	this.benefitsFk = getBenefitsFk;
	this.benefitsHi = getBenefitsHi;
	this.benefitsCr = getBenefitsCr;
	this.benefitsEd = getBenefitsEd;
	this.benefitsOt = getBenefitsOt;
	this.schedulingY = getSchedulingY;
	this.schedulingN = getSchedulingN;
	this.schedulingOc = getSchedulingOc;
	this.schedulingNh = getSchedulingNh;
	this.schedulingCl = getSchedulingCl;
	this.schedulingNn = getSchedulingNn;
	this.schedulingOt = getSchedulingOt;
	this.canAdvanceY = getCanAdvanceY;
	this.canAdvanceN = getCanAdvanceN;
	this.openPositionsSa = getOpenPositionsSa;
	this.openPositionsAm = getOpenPositionsAm;
	this.openPositionsRs = getOpenPositionsRs;
	this.openPositionsCs = getOpenPositionsCs;
	this.openPositionsMa = getOpenPositionsMa;
	this.openPositionsVd = getOpenPositionsVd;
	this.openPositionsOt = getOpenPositionsOt;
	this.discriminationY = getDiscriminationY;
	this.discriminationN = getDiscriminationN;
	this.discriminationNs = getDiscriminationNs;
	this.workIssue = getWorkIssue;
	this.workerName = getWorkerName;
	this.workerContact = getWorkerContact;
	this.comment = getComment;
	this.teamMemberDisplay = getTeamMemberDisplay;
	this.storeSiteDisplay = getStoreSiteDisplay;
	this.dateNow = getDateNow;
};

var returnsActiveElementText = function (theClass){
	element = $(theClass);
	if (element.hasClass('active')){
		return element.text();
	}
	else {
		return null;
	}
};

var returnsActiveElementTrue = function (theClass){
	element = $(theClass);
	if (element.hasClass('active')){
		return true;
	}
	else {
		return null;
	}
};

var returnsFormValue = function (theClass){
	element = $(theClass);
	if (element.val()){
		return element.val();
	}
	else {
		return null;
	}
};

var returnsElementText = function (theClass){
	element = $(theClass)
	if (element.text()){
		return element.text();
	}
	else{
		return null;
	}
}

var dateIt = function (){
	var d = new Date();
	return d.toString();
}

// $(jobTitle).each(function(){
// 	if ($(this).hasClass('active')){
// 	}
// });

var recordState = function(){
	getJobTitleSa = returnsActiveElementText(".jobTitleSa");
	getJobTitleAm = returnsActiveElementText(".jobTitleAm");
	getJobTitleRc = returnsActiveElementText(".jobTitleRc");
	getJobTitleMa = returnsActiveElementText(".jobTitleMa");
	getJobTitleVd = returnsActiveElementText(".jobTitleVd");
	getJobTitleOt = returnsActiveElementText(".jobTitleOt");
	getPt = returnsActiveElementTrue(".pt");
	getFt = returnsActiveElementTrue(".ft");
	getPreferFtY = returnsActiveElementTrue(".preferFtY");
	getPreferFtN = returnsActiveElementTrue(".preferFtN");
	getSatisfiedPayY = returnsActiveElementTrue(".satisfiedPayY");
	getSatisfiedPayN = returnsActiveElementTrue(".satisfiedPayN");
	getPayAmount = returnsFormValue (".payAmount");
	getBenefitsFk = returnsActiveElementText(".benefitsFk");
	getBenefitsHi = returnsActiveElementText(".benefitsHi");
	getBenefitsCr = returnsActiveElementText(".benefitsCr");
	getBenefitsEd = returnsActiveElementText(".benefitsEd");
	getBenefitsOt = returnsActiveElementText(".benefitsOt");
	getSchedulingY = returnsActiveElementTrue(".schedulingY");
	getSchedulingN = returnsActiveElementTrue(".schedulingN");
	getSchedulingOc = returnsActiveElementText(".schedulingOc");
	getSchedulingNh = returnsActiveElementText(".schedulingNh");
	getSchedulingCl = returnsActiveElementText(".schedulingCl");
	getSchedulingNn = returnsActiveElementText(".schedulingNn");
	getSchedulingOt = returnsActiveElementText(".schedulingOt");
	getCanAdvanceY = returnsActiveElementTrue(".canAdvanceY");
	getCanAdvanceN = returnsActiveElementTrue(".canAdvanceN");
	getOpenPositionsSa = returnsActiveElementText(".openPositionsSa");
	getOpenPositionsAm = returnsActiveElementText(".openPositionsAm");
	getOpenPositionsRs = returnsActiveElementText(".openPositionsRs");
	getOpenPositionsCs = returnsActiveElementText(".openPositionsCs");
	getOpenPositionsMa = returnsActiveElementText(".openPositionsMa");
	getOpenPositionsVd = returnsActiveElementText(".openPositionsVd");
	getOpenPositionsOt = returnsActiveElementText(".openPositionsOt");
	getDiscriminationY = returnsActiveElementTrue(".discriminationY");
	getDiscriminationN = returnsActiveElementTrue(".discriminationN");
	getDiscriminationNs = returnsActiveElementTrue(".discriminationNs");
	getWorkIssue = returnsFormValue (".workIssue");
	getWorkerName = returnsFormValue (".workerName");
	getWorkerContact = returnsFormValue (".workerContact");
	getTeamMemberDisplay = returnsElementText (".teamMemberDisplay");
	getStoreSiteDisplay = returnsElementText (".storeSiteDisplay");
	getComment = returnsFormValue (".comment");
	getDateNow = dateIt();
	return true;
};







$('.mainSend').submit(function(event){
	event.preventDefault();
	
	recordState();
	var surveyResponse = new surveyResponseClass();
	// console.log('yeah', surveyResponse);
	var ajaxUrl = '/work';
	$.get(ajaxUrl, surveyResponse, function(data){
		// console.log(data)
		if (data.success){
			console.log(data.success)
			$('html,body').scrollTop(0);
			location.reload(forceGet=true);
		}
	});
});