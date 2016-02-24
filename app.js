// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//is this right?


// Create Express App Object \\
var app = express();
mongoose.connect('mongodb://localhost/onlinejobDB');
var applicantController = require('./controllers/applicantCtrl.js');

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\

app.get('/', function(req, res) {
	res.sendFile('html/index.html', {root : './public'});
});

// displays a list of applicants
app.get('/api/applicants', applicantController.showApplicants);


app.get('/applicantspage',function(req,res){
	console.log("are we in the app.get show applicants? ");
	res.sendFile('html/applicants.html', {root : './public'});
})

// creates and applicant

app.post('/api/applicant', applicantController.createApplicant);
app.post('/api/applicantDelete',applicantController.deleteApplicant);
//app.post('/applicant', applicantController.createApplicant(req,res));



app.get('/success',function (req,res){
   res.sendFile('html/success.html', {root: './public'});

});







// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})