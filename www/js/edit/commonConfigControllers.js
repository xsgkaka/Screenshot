/**
 * Created by xsg on 2016/10/11.
 * 主要用于信息配置的通用controller
 */
angular.module("starter.controllers.editControllers.commonConfigControllers",[])
  .controller("CommonConfigForListCtrl", function ($scope, $stateParams, localStore, runtimeData, YZJTUserData, $ionicHistory) {//列表类配置
    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {//解决从tabs界面跳出之后，back btn按钮不显示的问题
      viewData.enableBack = true;
    });
    $scope.title = $stateParams.title;
    var configType = eval($stateParams.config + "");
    var options = configType.options;
    /*根据配置项，获取当前的值*/
    var userConfigKey = runtimeData.getKey($stateParams.config);
    var userConfigVal = eval(userConfigKey + ".value");
    for(var i = 0; i < options.length; i++){
      if(options[i].value === userConfigVal){
        options[i].selected = true;
      }else{
        options[i].selected = false;
      }
    }
    $scope.items = configType.options;
    $scope.select = function (i) {
      angular.forEach($scope.items, function (data,index,array) {
        data.selected = false;
      });
      $scope.items[i].selected = true;
      //更新配置数据
      eval(userConfigKey + ".value" + "='" + $scope.items[i].value + "'");
      eval(userConfigKey + ".label" + "='" + $scope.items[i].label + "'");
      localStore.setObject(LOCALSTORESTR, YZJTUserData);
      $ionicHistory.goBack();
    }
});

