angular.module('starter.controllers', [])
// angular.module('ui.bootstrap.demo', ['ngAnimate', 'ui.bootstrap']);
// angular.module('ui.bootstrap.demo')

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
.controller('temp',function($scope){
    $scope.family=[
	  { Question: 'family Question 1',Answer: 'family Answer 1' },
	  { Question: 'family Question 2', Answer: 'family Answer 2' }
    ];
    $scope.immigration=[
        { Question: 'immigration Question 1',Answer: 'immigration Answer 1' },
        { Question: 'immigration Question 2', Answer: 'immigration Answer 2' }
    ];
    $scope.divorce=[
       { Question: 'divorce Question 1',Answer: 'divorce Answer 1' },
        { Question: 'divorce Question 2', Answer: 'divorce Answer 2' },
        { Question: 'divorce Question 3', Answer: 'divorce Answer 3' },
        { Question: 'divorce Question 4', Answer: 'divorce Answer 4' },
        { Question: 'divorce Question 5', Answer: 'divorce Answer 5' },
        { Question: 'divorce Question 6', Answer: 'divorce Answer 6' },
        { Question: 'divorce Question 7', Answer: 'divorce Answer 7' },
        { Question: 'divorce Question 8', Answer: 'divorce Answer 8' }
    ];
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
.controller('subLawCtrl', function ($scope) {
    $scope.current =
    { procedure: null, lawType: null };
    

    $scope.meta =
    {
        proceduralList:
        [
            {
                id: 1,
                name: 'Statues', 
                lawTypeList:
                [
                    {
                        id: 1,
                        name: 'Family Court'
                    },
                    { 
                        id: 2,
                        name: 'Domestic Relations' 
                    },
                    {   id: 3,
                        name: 'Court Rules' 
                    }
                ]
            },
            {
                id: 2,
                name: 'Case Law', 
                lawTypeList:
                [
                    {
                        id: 1,
                        name: 'Custody'
                    },
                    {
                        id: 2,
                        name: 'Visitation'
                    }
                ]
            }
        ]
    };


    // initiate an array to hold all active tabs
    $scope.activeTabs = [];

    // check if the tab is active
    $scope.isOpenTab = function (tab) {
        // check if this tab is already in the activeTabs array
        if ($scope.activeTabs.indexOf(tab) > -1) {
            // if so, return true
            return true;
        } else {
            // if not, return false
            return false;
        }
    }

    // function to 'open' a tab
    $scope.openTab = function (tab) {
        // check if tab is already open
        if ($scope.isOpenTab(tab)) {
            //if it is, remove it from the activeTabs array
            $scope.activeTabs.splice($scope.activeTabs.indexOf(tab), 1);
        } else {
            // if it's not, add it!
            $scope.activeTabs.push(tab);
        }
    }
})

.controller('stipLangCtrl', function ($scope) {
    $scope.current =
    { procedure: null, lawType: null };


    $scope.meta =
    {
        proceduralList:
        [
            {
                id: 1,
                name: 'Statues',
                lawTypeList:
                [
                    {
                        id: 1,
                        name: 'Family Court'
                    },
                    {
                        id: 2,
                        name: 'Domestic Relations'
                    },
                    {
                        id: 3,
                        name: 'Court Rules'
                    }
                ]
            },
            {
                id: 2,
                name: 'Case Law',
                lawTypeList:
                [
                    {
                        id: 1,
                        name: 'Custody'
                    },
                    {
                        id: 2,
                        name: 'Visitation'
                    }
                ]
            }
        ]
    };


    // initiate an array to hold all active tabs
    $scope.activeTabs = [];

    // check if the tab is active
    $scope.isOpenTab = function (tab) {
        // check if this tab is already in the activeTabs array
        if ($scope.activeTabs.indexOf(tab) > -1) {
            // if so, return true
            return true;
        } else {
            // if not, return false
            return false;
        }
    }

    // function to 'open' a tab
    $scope.openTab = function (tab) {
        // check if tab is already open
        if ($scope.isOpenTab(tab)) {
            //if it is, remove it from the activeTabs array
            $scope.activeTabs.splice($scope.activeTabs.indexOf(tab), 1);
        } else {
            // if it's not, add it!
            $scope.activeTabs.push(tab);
        }
    }
})

.controller('courtHouseCtrl', function ($scope) {
    $scope.current =
    {
        court: null,
        borough: null,
        judge: null
    };


    $scope.meta =
    {
        courtList:
        [
            {
                id: 1,
                name: 'Family Court',
                boroughList:
                [
                    {
                        id: 1,
                        name: 'Manhattan'
                    },
                    {
                        id: 2,
                        name: 'Brooklyn'
                    },
                    {
                        id: 3,
                        name: 'Queens'
                    },
                    {
                        id: 4,
                        name: 'Bronx'
                    },
                    {
                        id: 5,
                        name: 'Staten Island'
                    }
                ]
            },
            {
                id: 2,
                name: 'Supreme Court Civil',
                boroughList:
                [
                    {
                        id: 1,
                        name: 'Manhattan'
                    },
                    {
                        id: 2,
                        name: 'Brooklyn'
                    },
                    {
                        id: 3,
                        name: 'Queens'
                    },
                    {
                        id: 4,
                        name: 'Bronx'
                    },
                    {
                        id: 5,
                        name: 'Staten Island'
                    }
                ]
            },
            {
                id: 2,
                name: 'Supreme Court Criminal',
                boroughList:
                [
                    {
                        id: 1,
                        name: 'Manhattan'
                    },
                    {
                        id: 2,
                        name: 'Brooklyn'
                    },
                    {
                        id: 3,
                        name: 'Queens'
                    },
                    {
                        id: 4,
                        name: 'Bronx'
                    },
                    {
                        id: 5,
                        name: 'Staten Island'
                    }
                ]
            }
        ]
    };


    // initiate an array to hold all active tabs
    $scope.activeTabs = [];

    // check if the tab is active
    $scope.isOpenTab = function (tab) {
        // check if this tab is already in the activeTabs array
        if ($scope.activeTabs.indexOf(tab) > -1) {
            // if so, return true
            return true;
        } else {
            // if not, return false
            return false;
        }
    }

    // function to 'open' a tab
    $scope.openTab = function (tab) {
        // check if tab is already open
        if ($scope.isOpenTab(tab)) {
            //if it is, remove it from the activeTabs array
            $scope.activeTabs.splice($scope.activeTabs.indexOf(tab), 1);
        } else {
            // if it's not, add it!
            $scope.activeTabs.push(tab);
        }
    }

    $scope.judgeDirectoryHead =
        {
            judgeListHead:
                [
                    {
                        id: 1,
                        name: 'Name',
                        room: 'Room',
                        phone: 'Phone'
                    }
                ]

        };

    $scope.judgeDirectory =
        {
            
            judgeList:
                [
                    {
                        id: 1,
                        name: 'John Lock',
                        room: '1A',
                        phone: '585-555-3333'
                    },
                    {
                        id: 2,
                        name: 'Christine Smith',
                        room: '1B',
                        phone: '585-555-3333'
                    }
                ]
        };
})


.controller('supportCtrl', function($scope) {
    //$scope.show = false;
     $scope.submit = function() {
      $scope.show = true;
      var percentages = [.17, .25, .29, .31, .35]
      var percent = percentages[$scope.numChildren - 1]

      if ($scope.income > 141000) {
        $scope.output = $scope.income * percent + " \n Note: Income greater than $141,000, court may decide not to use " + percent *100 + "% as a guideline"
      }
      if ($scope.numChildren >5) {
        percent = .35
      }
      $scope.output = +($scope.income * percent).toFixed(8)

      if (isNan($scope.output)) {
        $scope.output = "Inputs must be numbers"
      }
     }
})

.controller('calculatorCtrl', function($scope) {

});


