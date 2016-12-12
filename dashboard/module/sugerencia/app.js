(function(){
    var app = angular.module('app',["firebase" ])
    app.controller('appCtrl',function($scope, $firebase, $http){
    var ref = new Firebase("https://cluster-web.firebaseio.com/sugerencia");
    var sync = $firebase(ref);
    $scope.DB = sync.$asArray();
    $scope.titulo='Sugerencia';
    $scope.app={Codigo_Sugerencia:'', Descripcion:'', Numero_Documento:'', Fecha:''};
    $http.get('https://cluster-web.firebaseio.com/facturas/.json').success(function (data) {
   //enviamos los datos a la vista con el objeto $scope
   $scope.factura = data;
 });
    $http.get('https://cluster-web.firebaseio.com/usuarios/.json').success(function (data) {
   //enviamos los datos a la vista con el objeto $scope
   $scope.datos = data;
 });
    $scope.add=function(){
        $scope.DB.$add($scope.app);
        $scope.app={Codigo_Sugerencia:'', Descripcion:'', Numero_Documento:'', Fecha:''};
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

