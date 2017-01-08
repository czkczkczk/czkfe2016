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
            var snum = parseInt(value.num);//强制解析字符串
            allnum += snum;
        });
        return allnum;
    };

    $scope.del = function(id){
        var index = -1;//先定义一个index=-1，后面删除不等于-1时的$scope.data数组中的一条
        //通过循环从data中找出这个id，并且通过这个id进行删除这条数据
        angular.forEach($scope.data,function(value,key){
            console.log(value.id);
            if(id == value.id){
                index = key;
                console.log(index);
            }
        });
        if(index != -1){
            $scope.data.splice(index,1)
        }
    }

    //清空购物车
    $scope.empty = function () {
        $scope.data = {};
    }
    //button添加
    $scope.add = function(id){
        var id1 = addd(id);
        $scope.data[id1].num += 1;

    };
    //删除
    $scope.reduce = function(id){
        var id1 = addd(id);
        if($scope.data[id1].num>1){
            $scope.data[id1].num -= 1;
        }else{
            confirm("删除商品？")
            $scope.del(id);
        }


    };
    var addd = function(id){
        var index = -1;
        angular.forEach($scope.data,function(value,key){
            //console.log(value.id);
            if(value.id == id){
                index = key;
            }

        });
        return index;
        //console.log(index);
    }

}
