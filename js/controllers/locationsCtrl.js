angular.module('devmtnTravel').controller('locationsCtrl', function (mainSrv, $scope, $stateParams) {

    $scope.locations = mainSrv.travelInfo;

});