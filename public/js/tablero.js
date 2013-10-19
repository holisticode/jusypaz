
var app = angular.module('jusypazApp', []);

app.controller('TableroCtrl', function TableroCtrl($scope, $http) {
  var serviceUrl = "/consulta/cedula";

  $scope.admin_index = function() {
    location.href = '/admin#index';
  };

  $scope.consulta_cedula = function() {
    data = '{"cedula": "' + $scope.cedula + '"}';
    $http.post(serviceUrl, data)
      .success(function (data, stat, headers, config) {
        console.log(data);
        console.log(stat);
        console.log(headers);
        $scope.result = data;
    }).error(function(response) { 
        $scope.result = response;
    });
  };
});
