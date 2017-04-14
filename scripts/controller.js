var app = angular.module('portfolioModule');

app.controller('portCtrl', function($scope, $location, $anchorScroll) {

// Function to have page scroll to section of link thats clicked

$scope.scrollTo = function(id) {
$anchorScroll(id);
}

// Framework and Library logos

$scope.homeImages = [{
  source: '../images/javascriptIcon.png'
},
{
source: '../images/htmlIcon.png'
},
{
source: '../images/cssIcon.png'
},
{
  source: '../images/angularIcon.png'
}
];

});
