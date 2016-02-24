var mongoose = require('mongoose')

var applicantSchema = mongoose.Schema({
	name : String,
	bio :String,
	skills: Array,
	years : Number,
	why : String,

});

module.exports = mongoose.model('Applicant', applicantSchema);