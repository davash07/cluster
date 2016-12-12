(function(){
    var app = angular.module('app',["firebase" ])
    app.controller('appCtrl',function($scope, $firebase){
    var ref = new Firebase("https://cluster-web.firebaseio.com/sector");
    var sync = $firebase(ref);
    $scope.DB = sync.$asArray();
    $scope.titulo='Sectores';
    $scope.Sector=['Primario', 'Secundario', 'Terciario'];
    $scope.app={Codigo_Sector:'', Sector:'', SubSector:''};

    $scope.add=function(){
        $scope.DB.$add($scope.app);
        $scope.app={Codigo_Sector:'', Sector:'', SubSector:''};
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