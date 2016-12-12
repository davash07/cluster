(function(){
    var app = angular.module('app',["firebase" ])
    app.controller('appCtrl',function($scope, $firebase, $http){
    var ref = new Firebase("https://cluster-web.firebaseio.com/facturas");
    var sync = $firebase(ref);
    $scope.DB = sync.$asArray();
    $scope.titulo='Facturas';
    $scope.tipopago=['Credito', 'Contado'];
    $scope.app={Codigo_Facturacion:'', Descuento:'', Fecha:'', Valor:'', Numero_Documento:'', Codigo_Producto:''};
    $http.get('https://cluster-web.firebaseio.com/usuarios/.json').success(function (data) {
   //enviamos los datos a la vista con el objeto $scope
    $scope.datos = data;
 });
    $http.get('https://cluster-web.firebaseio.com/producto-servicio/.json').success(function (data) {
   //enviamos los datos a la vista con el objeto $scope
    $scope.productos = data;
 });
    
    $scope.add=function(){
        $scope.DB.$add($scope.app);
        $scope.app={Codigo_Facturacion:'', Descuento:'', Fecha:'', Valor:'', Numero_Documento:'', Codigo_Producto:''};
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

