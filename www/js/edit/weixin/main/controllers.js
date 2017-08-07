/**
 * Created by xsg on 2016/9/28.
 */
angular.module("starter.controllers.editControllers.wxMainControllers", [])
  .controller("WXMainEditConfigCtrl", function ( $scope, $ionicNavBarDelegate, $ionicHistory,$state, $rootScope,YZJTUserData) {//编辑模块中微信主界面配置界面
    $scope.myBack = function () {
      $state.go("mainTab.edit");
    }
    //获取当前编辑器的数据配置
    $scope.editorData = YZJTUserData.editor;

  })
  .controller("WXMainEditFriendCtrl", function ($scope, $ionicHistory, $state, $rootScope) {//编辑-微信主界面-编辑朋友
    $scope.myBack = function () {
      $state.go("mainTab.edit");
    };
    $scope.friends = [{
      img: "img/common/head_pic/1.jpg",
      nickname: "北京一漂",
      talkmsg: "产品很好哇!"
    },{
      img: "img/common/head_pic/2.jpg",
      nickname: "你好,高夫人",
      talkmsg: "赶快发货吧"
    },{
      img: "img/common/head_pic/3.jpg",
      nickname: "娇娇是我女神",
      talkmsg: "我要推荐给我同学看看"
    }];
    //显示添加朋友界面
    $scope.showAddFriend = function () {
      $state.go("addWXFriend");
    };
  })
  .controller("WXMainPreViewCtrl", function ($scope , $ionicHistory, $state, $rootScope, $ionicLoading, $timeout, YZJTUserData) {//微信主界面预览
    $scope.configData = YZJTUserData;

    $scope.canvas = null;
    $scope.img64Data = null;
    $scope.myBack = function () {
      $state.go("mainTab.edit");
    };
    //显示等待提示框
    var showLoading = function () {
      $ionicLoading.show({
        template: '正在生成预览...'
      }).then(function(){
        console.log("The loading indicator is now displayed");
      });
    };
    showLoading();
    var hideLoading = function () {

      $ionicLoading.hide();
      //将html转换成canvas
      html2canvas(document.getElementById("transferDiv"), {
        onrendered: function(canvas) {
          //获取到转后的图片
          var base64Data = canvas.toDataURL("image/png");
          $scope.img64Data = base64Data;
          $scope.$apply();
        },
        width: $rootScope.shotWidth,
        height: $rootScope.shotHeight
      });
    };
    $timeout(hideLoading,1000, true);

    //获取 当前屏幕的大小
    $scope.saveScreenShot = function () {
      if(isDev){
        return;
      }
      cordova.base64ToGallery(
        $scope.img64Data,
        {
          prefix: 'img_',
          mediaScanner: true
        },
        function (path) {
          console.log(path);
        },
        function (err) {
          console.error(err);
        }
      );
    };
    $scope.$watch("configData", function () {
      showLoading();
      $timeout(hideLoading,1000, true);
    },true);
  })
  .controller("addFriendCtrl", function ($state, $scope) {//微信主界面--添加盆友
    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {//解决从tabs界面跳出之后，back btn按钮不显示的问题
      viewData.enableBack = true;
    });
  });
