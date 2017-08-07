// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', "starter.directives"])
  .run(function ($ionicPlatform, $rootScope, localStore, YZJTUserData) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
      //配置当前浏览器中设置的文字大小，不随着手机中文字设置的大小发生改变
      if(window.MobileAccessibility){
        window.MobileAccessibility.usePreferredTextZoom(false);
      }
      //获取屏幕宽高
      $rootScope.windowHeight = window.screen.height;
      $rootScope.windowWidth = window.screen.width;
      $rootScope.shotHeight = 1920;
      $rootScope.shotWidth = 1080;

      //判断localstorage中是否含有com.xsg.YZJTUserData;
      if(Util.isEmpty(localStore.getObject(LOCALSTORESTR))){
        //如果不含有，用YZJTUserData来初始化本地存储中的com.xsg.YZJTUserData
        localStore.setObject(LOCALSTORESTR, YZJTUserData);
      }
    });
  })
  .config(function ($ionicConfigProvider,  $compileProvider) {
    $ionicConfigProvider.tabs.position('bottom');
    //能够加载img src 为base64的数据
    $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|local|file|data):/);
    //去掉返回按钮 后面的默认标题
    $ionicConfigProvider.backButton.previousTitleText(false);
  })
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('mainTab', {
        url: '/mainTab',
        abstract: true,
        templateUrl: 'templates/main/tabs.html'
      })
      .state('mainTab.product', {
        url: '/product',
        views: {
          'tab-product': {
            templateUrl: 'templates/main/products.html',
            controller: 'ProduCtrl'
          }
        }
      })
      .state('mainTab.edit', {
        url: '/edit',
        views: {
          'tab-edit': {
            templateUrl: 'templates/main/edit.html',
            controller: 'EditCtrl'
          }
        }
      })
      .state('mainTab.mine', {
        url: '/mine',
        views: {
          'tab-mine': {
            templateUrl: 'templates/main/mine.html',
            controller: 'MineCtrl'
          }
        }
      })
      .state("mainTab.editWXMainConfig",{//编辑-微信主界面-配置
        url:"/editWXMainConfig",
        views:{
          "tab-edit":{
            templateUrl:"templates/edit/weixin/main/config.html",
            controller:"WXMainEditConfigCtrl"
          }
        }
      })
      .state("mainTab.editWXMainFriend", {//编辑-微信主界面-编辑盆友
        url:"/editWXMainFriend",
        views:{
          "tab-edit":{
            templateUrl:"templates/edit/weixin/main/editFriend.html",
            controller:"WXMainEditFriendCtrl"
          }
        }
      })
      .state("mainTab.editWXMainPreview",{//编辑-微信主界面-预览
        url:"/editWXMainPreview",
        views:{
          "tab-edit":{
            templateUrl:"templates/edit/weixin/main/preview.html",
            controller:"WXMainPreViewCtrl"
          }
        }
      })
      .state("addWXFriend",{//编辑--微信-添加盆友
        url:"/addWXFriend",
        templateUrl:"templates/edit/weixin/main/addFriend.html",
        controller:"addFriendCtrl"
      })
      .state("commonConfigForList",{//通用的配置项编辑界面
        url:"/commonConfigForList/:config/:title",//:配置类型/:标题
        templateUrl:"templates/edit/commonConfigForList.html",
        controller:"CommonConfigForListCtrl"
      });
    $urlRouterProvider.otherwise('/mainTab/edit');
    /*$timeout(function() {
      $state.go('mainTab.edit');
    }, 300);*/
  });
