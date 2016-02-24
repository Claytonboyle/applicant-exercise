var Applicant = require('../models/applicantModel.js')

function createApplicant (req,res){

	var applicant = new Applicant({

		name :req.body.name,
		bio :req.body.bio,
		skills: req.body.skills.split(','),
		years : req.body.years,
		why : req.body.why,
	})

	applicant.save(function(err,savedApplicant){
		if (err)
			res.send('error: '+ err);
		else{
			console.log(savedApplicant);
			console.log("success I hope");
			res.redirect('/success');
			
		}
		
	})
	
}

function showApplicants(req,res){

	Applicant.find({}, function(err,docs){
		res.send(docs);
	});

}

function deleteApplicant(req,res){
	var appToDelete = req.body._id;
	Applicant.remove({_id:appToDelete},function(err,doc){
		if (err)
			res.send('error: ',err)
		else
			res.send('success');
	});
}

module.exports = {
		deleteApplicant : deleteApplicant,
		createApplicant : createApplicant,
		showApplicants : showApplicants,
	}




/*

function getHeroes (req, res){
	// Get ONE
	if(req.params.heroID){
		Hero.findOne({_id : req.params.heroID}, function(err, doc){
			res.send(doc)
		})
	}
	// Get MANY
	else{
		Hero.find({}, function(err, docs){
			res.send(docs)
		})
	}
}

module.exports = {
	createHero : createHero,
	getHeroes : getHeroes
}
*/