var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var Challenge = require('../models/challenges');
var moment = require('moment')

moment.locale('bg')

function CalculateTimes(challenges){
	var result =[];
	for(challenge in challenges){
		var currentChallenge = challenges[challenge].toObject();
		console.log(currentChallenge['startDate'])
		console.log(currentChallenge['endDate'])
		currentChallenge['timeElapsed'] = moment(currentChallenge['startDate']).fromNow()
		currentChallenge['timeLeft'] = moment(currentChallenge['endDate']).fromNow()
		result.push(currentChallenge)
	} 
	return result
}
router.get('/:userID', function(req, res, next) {
	 Challenge.
	 find({
		_creator:req.params.userID,
		title : {$ne:null}
	 })
	 .populate('_creator')
	 .exec(
	function (err, post) {
		if (err) return next(err);
		post = CalculateTimes(post);

		 res.json(post);
		}
);

});

module.exports = router;
