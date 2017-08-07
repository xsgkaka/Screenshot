/**
 * Created by xsg on 2016/10/5.
 * 通用的预览界面
 */
angular.module("starter.controllers.previewControllers",[])
  .controller("statusBarACtrl", function ($scope, YZJTUserData) {//安卓类顶部
    $scope.scopeData = YZJTUserData;

  });

