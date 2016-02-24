angular.module('JobApp', [])

angular.module('JobApp')
	.controller('homeController', ['$scope','$http','$window', function($scope,$http,$window){

		var s=$scope;
		console.log("ARE WE IN ANGULAR");
	

		s.showApplicants = function(){
			console.log("showapplicants?");
			//$http.get('/api/applicants');
			//if we're coming through the angular controller, use this method
			$window.location.href = "/applicantspage";
		}
		
	}]);


angular.module('JobApp')
	.controller('applicantController', ['$scope','$http','$window', function($scope,$http,$window){

		var s=$scope;
		s.applicantsArray = [];
		console.log("ARE WE IN THE APPLICANT CONTROLLER");
		//do I need to do the window stuff?
		//this goes to the applicants 
		$http.get("/api/applicants").then (function(data){
			console.log(data.data);
			s.applicantsArray = data.data;

		})

		s.removeApplicantObject = function(applicant){
			console.log("WE NEED TO DELETE: ",applicant);
			$http.post('/api/applicantDelete',applicant).
				then(function(){
					console.log("WE ARE IN THE .THEN FUNCTION");
					//remove the object form the array
					for (var i=0;i<s.applicantsArray.length;i++){
						console.log("WE ARE IN THE FOR LOOP");
						if (s.applicantsArray[i]._id == applicant._id)
						{
							//remove from array
							//get out of for loop
							console.log("FOUND A MATCH TO DELETE FROM ARRAY");
							s.applicantsArray.splice(i,1);
							break;
						}
					}
				});

		}




		//$window.location.href="/api/applicants";


		
	}]);


// $scope.postUser = function(){
//         $http.post('/applicants', $scope.user)
//              .then(function(serverData){
//                  $scope.list = $scope.list || []
//                  $scope.list.push(serverData.data)
//                  $scope.user = {}
//              })
//     }