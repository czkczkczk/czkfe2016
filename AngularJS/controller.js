/**
 * Created by Administrator on 2017/1/6.
 */
function firstController ($scope) {
    $scope.data = [
        {
            "id": "1000",
            "name": "iphone5s",
            "num": 1,
            "price": 2000
        },
        {
            'id': '3300',
            'name': 'iphone5',
            'num': 30,
            'price': 3300
        },
        {
            'id': '2000',
            'name': 'Mac',
            'num': 5,
            'price': 14300
        },
        {
            'id': '3000',
            'name': 'ipad',
            'num': 37,
            'price': 3500
        }
    ];
    $scope.totalsum = function(){
        var allsum = 0;
        angular.forEach($scope.data,function(value){
            allsum +=value.price*value.num;
        });
        return allsum;
    };
    $scope.totalnum = function(){
        var allnum = 0;
        angular.forEach($scope.data,function(value){
            allnum += value.num;
        });
        return allnum;
    }

}