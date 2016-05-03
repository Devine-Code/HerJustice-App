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

//creates FAQ controller
.controller('FAQCtrl', function($scope,$window) {
    $scope.courts = [
      { title: 'General Family Court', id: 1 },
      { title: 'Custody/Visitation Court', id: 2 }
    ];
    $scope.courtSelected = $scope.courts[0];  
})

//controllerto print the question and answer
.controller('courtFAQ',function($scope,$http){
	//to get the php scripts for contact info
    $http.get("http://hjapps.herjustice.org/Query/FAQ_CustodyAndVisitation.php")
    .success(function (response) {$scope.custody = response;  });
	
	$http.get("http://hjapps.herjustice.org/Query/FAQ_FamilyCourt.php")
    .success(function (response) {$scope.family = response;  });
    
    //function to collapse and expand question ans answer
    $scope.show = false;
    $scope.toggleTab=function()
    {
        if ($scope.show==false) {
            $scope.show=true;   
        } else {
            $scope.show=false;
        }
    }
})

//creates contact info controller
.controller('contact',function($scope,$http,$window){
    $http.get("http://hjapps.herjustice.org/Query/ContactInformation.php")
    .success(function (response) {$scope.contactInformation = response;  });
	
	//function to send email
	$scope.sendMail = function(emailId){
		$window.open("mailto:"+ emailId,"_system");
	};
	
	//function to open phone app in phone when user clicks phone symbol on contact info page
    $scope.callPerson = function(phoneNum) {
        $window.open('tel:' + phoneNum, '_system', 'location=yes');
    }
	
})
//Creates the Substantive Law Controller
.controller('subLawCtrl', function ($scope,$http,$window) {
    //defines all of the variables in the current scope
    $scope.current =
    { procedure: null, lawType: null };
    
    //Creates the Meta Data-Model (DOM)
    //defines the variables for the procedural drop down and law type drop down menu
    $scope.meta =
    {
        //creates the first drop down menu line items
        proceduralList:
        [
            {
                id: 1,
                name: 'Statutes', 
                //creates the second drop down menu line items
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
                        name: 'Criminal Procedures Laws and Rules' 
                    },
					{   id: 4,
                        name: 'Civil Practice Laws and Rules' 
                    }
                ]
            },
            {
                id: 2,
                name: 'Case Law',
                //creates the second drop down menu line items 
                lawTypeList:
                [
                    {
                        id: 1,
                        name: 'Family Law'
                    },
                    {
                        id: 2,
                        name: 'Matrimonial Law'
                    }
                ]
            }
        ]
    };
	$scope.useUrl = function(url){
		
		$window.open(url, '_system');
	}
	//creates the http get request from the PHP URL identified
	//criminal procudures
	$http.get("http://hjapps.herjustice.org/Query/SubstantiveOrProceduralLaw_Statutes_CPL.php")
    .success(function (response) {$scope.Statutes_CPL = response;  });
	
	//civil practice law
	$http.get("http://hjapps.herjustice.org/Query/SubstantiveOrProceduralLaw_Statutes_CPLR.php")
    .success(function (response) {$scope.Statutes_CPLR = response;  });
	
	//domestic relations
	$http.get("http://hjapps.herjustice.org/Query/SubstantiveOrProceduralLaw_Statutes_DRL.php")
    .success(function (response) {$scope.Statutes_DRL = response;  });
	
	//family court
	$http.get("http://hjapps.herjustice.org/Query/SubstantiveOrProceduralLaw_Statutes_FCA.php")
    .success(function (response) {$scope.Statutes_FCA = response;  });
	
	//case law custody
	$http.get("http://hjapps.herjustice.org/Query/SubstantiveOrProceduralLaw_CaseLaw_Custody.php")
    .success(function (response) {$scope.CaseLaw_Custody = response;  });
	
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
//Creates the Stipulation Language Controller 
.controller('stipLangCtrl', function ($scope,$http) {
	
	$http.get("http://hjapps.herjustice.org/Query/GSN_Checklist.php")
    .success(function (response) {$scope.checkDirectory = response;  });    

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
//Creates the Court House Controller 
.controller('courtHouseCtrl', function ($scope,$http,$window) {
    //defines all of the variables in the current scope
    $scope.current =
    {
        court: null,
        borough: null,
        judge: null
    };

    //Creates the Meta DOM 
    //Defines the CourtList variable off of the Meta DOM
    $scope.meta =
    {
        //Defines the courtList title and list components
        courtList:
        [
            {   
                //creates the first ID drop down menu item
                id: 1,
                name: 'Family Court',
                //creates the boroughList drop down menu off of the first ID selected in the first dropdown menu
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
                //creates the second ID drop down menu item
                id: 2,
                name: 'Supreme Court Civil',
                //creates the boroughList drop down menu off of the second ID selected in the second dropdown menu
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
                //creates the third ID drop down menu item
                id: 3,
                name: 'Integrated Domestic Violence Court',
                //creates the boroughList drop down menu off of the third ID selected in the third dropdown menu
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

	$http.get("http://hjapps.herjustice.org/Query/CourtInfo_Family_Manhattan.php")
    .success(function (response) {$scope.family_manhattan = response;  });
	
	$http.get("http://hjapps.herjustice.org/Query/CourtInfo_Family_Brooklyn.php")
    .success(function (response) {$scope.family_brooklyn = response;  });
	
	$http.get("http://hjapps.herjustice.org/Query/CourtInfo_Family_Queens.php")
    .success(function (response) {$scope.family_queens = response;  });
	
	$http.get("http://hjapps.herjustice.org/Query/CourtInfo_Family_Bronx.php")
    .success(function (response) {$scope.family_bronx = response;  });
	
	$http.get("http://hjapps.herjustice.org/Query/CourtInfo_Family_StatenIsland.php")
    .success(function (response) {$scope.family_statenIsland = response;  });
	
	$http.get("http://hjapps.herjustice.org/Query/CourtInfo_SupremeCourt_Manhattan.php")
    .success(function (response) {$scope.supreme_manhattan = response;  });
	
	$http.get("http://hjapps.herjustice.org/Query/CourtInfo_SupremeCourt_Brooklyn.php")
    .success(function (response) {$scope.supreme_brooklyn = response;  });
	
	$http.get("http://hjapps.herjustice.org/Query/CourtInfo_SupremeCourt_Queens.php")
    .success(function (response) {$scope.supreme_queens = response;  });
	
	$http.get("http://hjapps.herjustice.org/Query/CourtInfo_SupremeCourt_Bronx.php")
    .success(function (response) {$scope.supreme_bronx = response;  });
	
	$http.get("http://hjapps.herjustice.org/Query/CourtInfo_SupremeCourt_StatenIsland.php")
    .success(function (response) {$scope.supreme_statenIsland = response;  });
	
	$http.get("http://hjapps.herjustice.org/Query/CourtInfo_IDVC_Manhattan.php")
    .success(function (response) {$scope.domestic_manhattan = response;  });
	
	$http.get("http://hjapps.herjustice.org/Query/CourtInfo_IDVC_Brooklyn.php")
    .success(function (response) {$scope.domestic_brooklyn = response;  });
	
	$http.get("http://hjapps.herjustice.org/Query/CourtInfo_IDVC_Queens.php")
    .success(function (response) {$scope.domestic_queens = response;  });
	
	$http.get("http://hjapps.herjustice.org/Query/CourtInfo_IDVC_Bronx.php")
    .success(function (response) {$scope.domestic_bronx = response;  });
	
	$http.get("http://hjapps.herjustice.org/Query/CourtInfo_IDVC_StatenIsland.php")
    .success(function (response) {$scope.domestic_statenIsland = response;  });
	
	
	$scope.useUrl = function(url){
		
		$window.open(url, '_system');
	}
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
    //Creates the Judge Directory Head DOM 
    //Defines the judgeListHead variable off of the Judge Directory Head DOM
    $scope.judgeDirectoryHead =
        {
            //creates the judge list variable headers
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
    //Creates the Judge Directory DOM
    $scope.judgeDirectory =
        {
            //Defines judge list people
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

//controller to calculate maintenance 
.controller('maintenanceCtrl', function($scope) {
    $scope.submit = function() {
        $scope.show = true;
        if ($scope.choice == 'nonCustodial') {
            var amt1 = .2 * $scope.payorIncome - .25 * $scope.payeeIncome
            var amt2 = .4 * ($scope.payorIncome + $scope.payeeIncome) - $scope.payeeIncome
            if (amt1 < amt2) {
                $scope.output = amt1
            }
            else {
                $scope.output = amt2
            }
        }
        else {
            var amt1 = .3 * $scope.payorIncome - .2 * $scope.payeeIncome
            var amt2 = .4 * ($scope.payorIncome + $scope.payeeIncome) - $scope.payeeIncome
            if (amt1 < amt2) {
                $scope.output = amt1
            }
            else {
                $scope.output = amt2
            }
        }
        if ($scope.output < 0){
            $scope.output = 0
        }

    }
})
.controller('PlaylistsCtrl', function($scope) {

})
//controller to calclate business days 
.controller('businessDaysCtrl', function($scope) {
    $scope.submit = function() {
        $scope.show = true;

        var startingDate = new Date()
        var daysToAdjust = $scope.businessDaysNum
        var newDate = new Date(startingDate.valueOf()),
            businessDaysLeft,
            isWeekend,
            direction;

        // need a whole day
        if (daysToAdjust !== parseInt(daysToAdjust, 10)) {
            throw new TypeError('addBusinessDays can only adjust by whole days');
        }

    
        if (daysToAdjust === 0) {
            return startingDate;
        }
        direction = daysToAdjust > 0 ? 1 : -1;

        // Move the date in the correct direction
        // but only count business days toward movement
        businessDaysLeft = Math.abs(daysToAdjust);
        while (businessDaysLeft) {
            newDate.setDate(newDate.getDate() + direction);
            isWeekend = newDate.getDay() in {0: 'Sunday', 6: 'Saturday'};
            //add day if new date is not saturday or sunday
            if (!isWeekend) {
                businessDaysLeft--;
            }
        }
        $scope.output = newDate.toISOString().substring(0, 10);

        //var moment = require('moment-business-days')
        //var july4th = '07-04';
        // var laborDay = '09-07';
         
        // moment.locale('us', {
        //    holidays: [july4th, laborDay],
        //    holidayFormat: 'MM-DD' 
        // });
        // var today = new Date();
        // var todayDate = today.toISOString().substring(0, 10)
        // moment(todayDate , 'YYYY-MM-DD').businessAdd(3)._d
        //$scope.output =  month + "-" + day + "-" + year
    }

});


