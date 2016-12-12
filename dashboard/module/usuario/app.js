(function(){
    var app = angular.module('app',["firebase" ])
    app.controller('appCtrl',function($scope, $firebase){
    var ref = new Firebase("https://cluster-web.firebaseio.com/usuarios");
    var sync = $firebase(ref);
    $scope.Tipo_Identificacion=['CC', 'CE', 'TI'];
    
    $scope.genero=['F','M'];
    $scope.DB = sync.$asArray();
    $scope.titulo='Usuarios';
    $scope.app={Tipo_Identificacion:'', Numero_Documento:'', Primer_Nombre:'', Primer_Apellido:'', Email:'', Fecha_Nacimiento:'', Telefono:'', Direccion:''};

    $scope.add=function(){
        $scope.DB.$add($scope.app);
        $scope.app={Tipo_Identificacion:'', Numero_Documento:'', Primer_Nombre:'', Primer_Apellido:'', Email:'', Fecha_Nacimiento:'', Telefono:'', Direccion:''};
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

