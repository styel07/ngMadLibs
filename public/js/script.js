// Code goes here
angular.module('myApp', [])
.controller('myCtrl', [function() {
 this.searchAll = function (choice) {
    switch(choice) {
      case 1:
        $scope.femaleName = "";
        break;
      case 2:
        $scope.dirtyTask = "";
        break;
      case 3:
        $scope.obnoxiuousCelberity = "";
        break;
      case 4:
        $scope.jobTitle = "";
        break;
      case 5:
        $scope.celebrity = "";
        break;
      case 6:
        $scope.hugeNumber = "";
        break;
      case 7:
        $scope.tediousTask = "";
        break;
      case 8:
        $scope.uselessTask = "";
        break;
      case 9:
        $scope.adjective = "";
        break;
    }
};

this.init = function() {
  $scope.femaleName='sarah';
  $scope.dirtyTask='mud shoveling';
  $scope.obnoxiuousCelberity='Miley Cyrus';
  $scope.jobTitle = 'Programmer';
  $scope.celebrity='Will Smith';
  $scope.hugeNumber='100000';
  $scope.tediousTask='folding clothes';
  $scope.uselessSkill = 'juggle';
  $scope.adjective = 'robust';
};
}]);
