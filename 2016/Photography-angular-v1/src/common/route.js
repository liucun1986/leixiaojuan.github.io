
module.exports=function($routeProvider){
    $routeProvider
        .otherwise({
            'redirectTo': '/'
        })
        .when('/', {
            templateUrl: 'views/default.html',
            controller: 'default'
        })
        .when('/:controller/:action', {
            templateUrl: 'views/default.html',
            controller: 'default'
        })
        .when('/deny',{
            templateUrl:'views/deny.html',
            controller: 'default'
        })
};

