angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope,$window) {
  $scope.courts = [
    { title: 'Family Court', id: 1 },
    { title: 'Immigration Court', id: 2 },
    { title: 'Divorce Court', id: 3 }
  ];
  $scope.courtSelected = $scope.courts[0];  
})
.controller('temp',function($scope,$http){
	$http.get("http://192.168.1.2/faq_family.php")
    .success(function (response) {$scope.family = response;  });
  $http.get("http://192.168.1.2/faq_immigration.php")
    .success(function (response) {$scope.immigration = response;  });
	$http.get("http://192.168.1.2/faq_divorce.php")
    .success(function (response) {$scope.divorce = response;  });
	
	$scope.followBtnImgUrl = 'img/plus.jpg';
	$scope.toggleImage=function(court)
  {
	  if ($scope.followBtnImgUrl == 'img/plus.jpg') {
			$scope.show=true;
            $scope.followBtnImgUrl = 'img/minus.jpg';
        } else {
			$scope.show=false;
            $scope.followBtnImgUrl = 'img/plus.jpg';
        }
  }
})
.controller('PlaylistCtrl', function($scope, $stateParams) {
})
