angular.module('devmtnTravel').controller('packagesCtrl', function (mainSrv, $scope, $stateParams) {
    if ($stateParams.country === "United States") {
        $scope.packageOffers = collectCountry("United States");
    } else if ($stateParams.country === "France") {
        $scope.packageOffers = collectCountry("France");
    } else if ($stateParams.country === "Australia") {
        $scope.packageOffers = collectCountry("Australia");
    } else {
        $scope.packageOffers = mainSrv.packageInfo;
    }
function collectCountry() {
    return mainSrv.packageInfo.filter(function( obj ) { 
        return obj.country == $stateParams.country;
        }); 
    }
});