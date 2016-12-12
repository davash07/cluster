(function(){
    var app = angular.module('app',["firebase" ])
    app.controller('appCtrl',function($scope, $firebase){
    var ref = new Firebase("https://encanto-development.firebaseio.com/useradmin")
    var sync = $firebase(ref);
    $scope.DB = sync.$asArray();
    $scope.titulo='Usuarios';
    $scope.app={email:'', name:'',username:''};

    $scope.add=function(){
        $scope.DB.$add($scope.app);
        $scope.app={image_url:'', username:'',first_name:'',gender:'',email:''};
    };
    $scope.delete=function(item){
    $scope.DB.$remove(item);
  };
 
});
  
})();