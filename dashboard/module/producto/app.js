(function(){
    var app = angular.module('app',["firebase" ])
    app.controller('appCtrl',function($scope, $firebase, $http){
    var ref = new Firebase("https://cluster-web.firebaseio.com/producto-servicio");
    var sync = $firebase(ref);
    $scope.DB = sync.$asArray();
    $scope.tipo = ['Producto', 'Servicio'];
    $scope.titulo='Productos';
    $scope.app={Codigo_Producto:'', Nombre_Producto:'', Observaciones:'', Tipo:'', Valor:''};

    $scope.add=function(){
        $scope.DB.$add($scope.app);
        $scope.app={Codigo_Producto:'', Nombre_Producto:'', Observaciones:'', Tipo:'', Valor:''};
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

