function firstController ($scope){
    $scope.date = new Date();
    setInterval(function(){
        $scope.$apply(function(){
            $scope.date = new Date();
        })
    },1000);
};

//$scope.$apply����
//
//����Ҫ���ҵ�������Ⱦ���ҵĿ��(htmlҳ��),�ڿ����ȥ��ʾ��ʱ��,
//    ��ʱ��Ҫ���ҵĿ���ṩһ������:�����������ֵ�����仯��ʱ��,������ֵ�Զ���ȡ���Զ�������Ⱦ
//
//
//���鲻����Լ�麯���������Լ����ʽ
//������angularJS��ǩ��Ӧ�ĺ����Զ��������飬�������ı������Զ���������