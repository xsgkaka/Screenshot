/**
 * Created by xsg on 2016/9/29.
 */
angular.module("starter.directives", [])
  .directive('showTabs', function ($rootScope) {
    return {
      restrict: 'A',
      link: function ($scope, $el) {
        $scope.$on("$ionicView.beforeEnter", function () {
          $rootScope.hideTabs = false;
        });
      }
    };
  })
  .directive('hideTabs', function ($rootScope) {
    return {
      restrict: 'A',
      link: function ($scope, $el) {
        $scope.$on("$ionicView.beforeEnter", function () {
          $rootScope.hideTabs = true;
        });
      }
    };
  })
  .directive("backState", function ($ionicHistory, $state) {//当点击返回按钮式直接返回到，指定的state
    return {
      restrict: "A",
      link: {
        pre: function ($scope, $el, attrs) {
          $scope.$on("$ionicView.afterEnter", function () {
            $ionicHistory.nextViewOptions({
              disableAnimate: true
            });
            //获取历史记录中的所有VIEW
            var viewHistory = $ionicHistory.viewHistory();
            var views = viewHistory.views;
            var backViewId = "";
            for (var key in views) {
              if (views[key].stateId == attrs.backState) {
                backViewId = key;
                break;
              }
            }
            var view = views[key];
            //$ionicHistory.clearHistory();
            $ionicHistory.backView(view);
          })
        }
      }
    }
  })
  .directive("nowTime", function () {//生成当前时间

    return {
      restrict:"E",
      replace:true,
      template:function () {
        var html = "";
        var date = new Date();
        var minutes = date.getMinutes();
        if(minutes < 10){
          minutes = "" + 0 + minutes;
        }
        var timeStr = date.getHours() + ":" + minutes;
        return "<span style='display: block;float: right;height: 75px;line-height: 75px;'>"+timeStr+"</span>";
      }
    }
  });
