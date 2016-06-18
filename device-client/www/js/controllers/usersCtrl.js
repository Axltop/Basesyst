angular.module('starter.controllers')
  .controller('UsersCtrl', function ($scope, $http, $ionicLoading, SERVER_ADDRESS) {

    $scope.doRefresh = function () {
      GetUsers();
    };

    GetUsers();
    function GetUsers() {
      $ionicLoading.show({
        template: 'Loading...'
      });
      $http.get(SERVER_ADDRESS + ':3000/users').success(function (users) {
        $ionicLoading.hide();
        $scope.users = users;
        $scope.$broadcast('scroll.refreshComplete');
      });
    };

  });
