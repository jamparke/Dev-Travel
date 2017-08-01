angular.module('devmtnTravel').controller('bookedCtrl', function (mainSrv, $scope, $stateParams) {
    console.log($stateParams)
    $scope.id = mainSrv.getPackage($stateParams.id);

   

});

