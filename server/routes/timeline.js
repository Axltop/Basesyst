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
		currentChallenge['timeElapsed'] = moment(currentChallenge['startDate']).fromNow()
		currentChallenge['timeLeft'] = moment(currentChallenge['endDate']).fromNow()
		result.push(currentChallenge)
	} 
	return result
}

function createTestChalllege(userID){
	var newChallenge = new Challenge({
		_creator : userID,
		title : "Feed The Cats",
		description : "Feed a stray cat"
	})
	console.log('New CHallenge')
	newChallenge.save();
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
