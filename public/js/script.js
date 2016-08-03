// Code goes here
angular.module('myApp', ['ngMessages'])
.controller('myCtrl', function($scope) {
var my = this;
 my.searchAll = function (choice) {
    switch(choice) {
      case 1:
        my.femaleName = "";
        break;
      case 2:
        my.dirtyTask = "";
        break;
      case 3:
        my.obnoxiuousCelberity = "";
        break;
      case 4:
        my.jobTitle = "";
        break;
      case 5:
        my.celebrity = "";
        break;
      case 6:
        my.hugeNumber = "";
        break;
      case 7:
        my.tediousTask = "";
        break;
      case 8:
        my.uselessTask = "";
        break;
      case 9:
        my.adjective = "";
        break;
    }
};


my.init = function() {
  my.page = true;
  my.buttonValue = 'Generate';
  my.femaleName='sarah';
  my.dirtyTask='mud shoveling';
  my.obnoxiuousCelberity='Miley Cyrus';
  my.jobTitle = 'Programmer';
  my.celebrity='Will Smith';
  my.hugeNumber='100000';
  my.tediousTask='folding clothes';
  my.uselessSkill = 'juggle';
  my.adjective = 'robust';
};

my.changeView = function() {
  // console.log('before',my.page);
  // console.log('after', my.page);
};

$scope.submit = function(){
  console.log($scope.data);
  console.log('Form is valid?',$scope.myForm.$invalid);
  if( $scope.myForm.$valid ) {
    my.page = (my.page) ? false : true;
    my.buttonValue = (my.page) ? 'Generate' : 'Reset';
      console.log('The form is valid');
  } else {
      console.log('The form is invalid');
  }

};

});
