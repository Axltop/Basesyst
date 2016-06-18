angular.module('starter.controllers')
  .controller('RegisterCtrl', function ($scope, $http, $ionicLoading, $ionicPopup, SERVER_ADDRESS) {
    $scope.data = {
      email: '',
      password1: '',
      password2: ''
    };

    $scope.register = function () {
      console.log($scope.data);

      //Simple password matching test
      if ($scope.data.password1 !== $scope.data.password2) {
        var alertPopup = $ionicPopup.alert({
          title: 'Passwords do not match',
          template: 'Passwords do not match'
        })
      }
      else {
        $http({
          method: 'GET',
          url: SERVER_ADDRESS + ':3000/auth/register',
          params: {
            email: $scope.data.email,
            password: $scope.data.password1
          }
        }).then(function (response) {
          console.log(response.data);
          var successPopup = $ionicPopup.alert({
            title: 'Success',
            template: response.data
          });
        }, function (err) {
          console.log(err);
        })
      }
      //TODO check if user exists


    };
  });
