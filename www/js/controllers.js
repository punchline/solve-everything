angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $location, $http) {
  // Form data for the login modal
  $scope.loginData = {};
  $scope.loginError = false;
  
  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  },

  // Perform the login action when the user submits the login form
  $scope.login = function() {
	if($scope.loginData.username != 'mike'){
		$scope.loginData = {};
		$scope.loginError = 'Could not verify Username';
		return false;
	}		
	if($scope.loginData.password != 'mike'){
		$scope.loginData.password = '';
		$scope.loginError = 'Incorrect Password';
		return false;
	}		
	$scope.loginError = false;
		// Simulate a login delay. Remove this and replace with your login
		// code if using a login system
		$timeout(function() {
			$location.path( "/app/dashboard" );
			$scope.$apply();
			console.log( $location );
		}, 1000);
  };
  
})

.controller('DirectoryCtrl', function($scope) {
	
	$scope.attendees = [
		{ 
			firstname: 'Mike',
			lastname: 'Payne',
			title: 'CTO, Punchline Advertising', 
			img: 'img/avatars/1.jpeg',
			id: 1 
		},
		{ 
			firstname: 'Jonathan',
			lastname: 'Payne',
			title: 'CEO, Punchline Advertising', 
			img: 'img/avatars/2.jpeg',
			id: 2 
		},
		{ 
			firstname: 'Wesley',
			lastname: 'Warren',
			title: 'COO, Punchline Advertising', 
			img: 'img/avatars/3.jpeg',
			id: 3
		},
		{ 
			firstname: 'Alex',
			lastname: 'Young',
			title: 'Web Developer, Punchline Advertising', 
			img: 'img/avatars/4.jpeg',
			id: 4 
		},
		{ 
			firstname: 'Brandon',
			lastname: 'Warner',
			title: 'Web Developer, Punchline Advertising', 
			img: 'img/avatars/5.jpeg',
			id: 5 
		},
		{ 
			firstname: 'Jon',
			lastname: 'Cox',
			title: 'Web Developer, Punchline Advertising', 
			img: 'img/avatars/6.jpeg',
			id: 6 
		}
	];
	
})

.controller('NewsController', function($scope, $http){
	$scope.posts = [
  		{
	  		user: {
		  		name: 'Marty McFly',
		  		avatar: 'img/avatars/mcfly.jpg'
		  	},
			date: 'November 05, 1955',
			content: 'This is a "Facebook" styled Card. The header is created from a Thumbnail List item, the content is from a card-body consisting of an image and paragraph text. The footer consists of a tabs, icons aligned left, within the card-footer.',
			image: 'img/delorean.jpg',
			likes: 1	
		}
	];  
	
	$scope.loadNews = function(){
		/*
		$http.get('/new-items')
		.success(function(newItems) {
			$scope.items = newItems;
		})
		.finally(function() {
			// Stop the ion-refresher from spinning
			$scope.$broadcast('scroll.refreshComplete');
		});
		*/
		
		$scope.posts = [
			{
				user: {
					name: 'Peter Venkman',
					avatar: 'img/avatars/1.jpeg'
				},
				date: 'June 08, 1984',
				content: 'Who ya gonna call??',
				image: 'img/ghostbusters.jpg',
				likes: 10	
			},
			{
				user: {
					name: 'Dr. Alan Grant',
					avatar: 'img/avatars/grant.jpg'
				},
				date: 'June 11, 1993',
				content: 'Getting our cardio on!',
				image: 'img/jurassic.jpg',
				likes: 98	
			},
	  		{
		  		user: {
			  		name: 'Marty McFly',
			  		avatar: 'img/avatars/mcfly.jpg'
			  	},
				date: 'November 05, 1955',
				content: 'This is a "Facebook" styled Card. The header is created from a Thumbnail List item, the content is from a card-body consisting of an image and paragraph text. The footer consists of a tabs, icons aligned left, within the card-footer.',
				image: 'img/delorean.jpg',
				likes: 1	
			}
		];
		$scope.$broadcast('scroll.refreshComplete');
	};
});