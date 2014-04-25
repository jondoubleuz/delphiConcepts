
'use strict'
var delphiControllers = angular.module('delphiControllers', []);

delphiControllers.controller('MainCtrl', function ($scope) {})

delphiControllers.controller('questionsCtrl', function($scope, $http) {

   var responses = $scope.responses = [1,5,2,4,4,2,3,3,4,4,3];

    function sortResponses() {
        //sort responses in ascending order
        var sorted = responses.sort(function (a, b) {
            a - b;
            return a - b
        })
        return (sorted)
    }

    function meanTest(userInput) {
        $scope.meanTestResult= ''
        if (userInput > $scope.mean()) {
            $scope.meanTestResult = "higher"
        }
        else {
            $scope.meanTestResult = "lower"
        }
        return($scope.meanTestResult)
    }

    $scope.median = function(){
      var median = sortResponses()[Math.floor(.50 * sortResponses().length)]
        return(median);
    }

    $scope.mean = function (){

        //find sum of responses
        var sumResponses = 0;
        for (var i = 0; i < responses.length; i++) {
            sumResponses += responses[i] << 0;
        }
        //find mean;
        var mean = sumResponses/responses.length;

        // print mean with 2 decimal places if not an integer
        if (mean % 1 !=0) {
            return(mean.toFixed(2));
        }
        else {
            return(mean.toFixed());
        }
    }

    $scope.saveAnswer = function(){

        responses.push($scope.userResponse);

        consensusTest();

        meanTest($scope.userResponse);

        commentTest();

        $scope.userResponse = '';
    }

    $scope.iqr = function iqr(){
        var iqr = q3() - q1();
        return (iqr);
    }

    function q1() {
        var q1 = sortResponses()[Math.ceil(.25 * sortResponses().length - 1)];
        return(q1);
    }

    function q3() {
        var q3 = sortResponses()[Math.floor(.75 * sortResponses().length - 1)];
        return(q3);
    }

    function commentTest() {
        if ($scope.userResponse > q3() | $scope.userResponse < q1()){
            console.log("add comment")
        }
    }

    function consensusTest() {
        if ($scope.iqr() <= 1) {
            console.log("Yah consensus!!!")
        }
    }



})



delphiControllers.controller('EmptyCtrl', function ($scope) {})
