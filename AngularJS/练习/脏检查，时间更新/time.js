function firstController ($scope){
    $scope.date = new Date();
    setInterval(function(){
        $scope.$apply(function(){
            $scope.date = new Date();
        })
    },1000);
};

//$scope.$apply脏检查
//
//当我要把我的数据渲染给我的框架(html页面),在框架里去显示的时候,
//    此时需要给我的框架提供一个机制:当控制器里的值发生变化的时候,框架里的值自动获取并自动发生渲染
//
//
//脏检查不光可以检查函数，还可以检查表达式
//所有用angularJS标签响应的函数自动调用脏检查，但是它的变量不自动调用脏检查