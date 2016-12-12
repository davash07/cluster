(function(){
    var app = angular.module('app',["firebase" ])
    app.controller('appCtrl',function($scope, $firebase, $http){
    var ref = new Firebase("https://cluster-web.firebaseio.com/empresa");
    var sync = $firebase(ref);
    $scope.DB = sync.$asArray();
    
    $scope.titulo='Empresas';
    $scope.app={Codigo_Sector:'', Direccion:'', Email:'', Nit:'', Razon_Social: '', Telefono:''};
    $http.get('https://cluster-web.firebaseio.com/sector/.json').success(function (data) {
   //enviamos los datos a la vista con el objeto $scope
   $scope.datos = data;
 });
    $scope.add=function(){
        $scope.DB.$add($scope.app);
        $scope.app={Codigo_Sector:'', Direccion:'', Email:'', Nit:'', Razon_Social: '', Telefono:''};
    };
   
    $scope.delete=function(item){
        $scope.DB.$remove(item);
    };
    $scope.edit=function(value){
        $scope.app=value;
        $scope.DB.$remove(value)
    };
    $scope.ver=function(value){
        $scope.app=value;
    }
    });
    
})();

