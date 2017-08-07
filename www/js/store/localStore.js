/**
 * 本地存储
 * Created by xsg on 2016/6/17.
 */
angular.module("starter.services.localStoreServices", [])
  .service("runtimeData", function () {
    return  {
      getKey: function (globalKey) {//根据全局配置的属性名称获取用户配置的属性名称
        return Util.arrayReplaceIndexToTargetV(globalKey.split("."), 0, "YZJTUserData").join(".");
      },
      getOptionData:function (userKey) {//根据用户配置的配置项和值。获取全局配置的整个配置项(列表类)
        var option = null;
        var userVal = eval(userKey);
        var configKey = Util.arrayReplaceIndexToTargetV(userKey.split("."), 0, "Config").join(".");
        var confingOptions = eval(configKey).options;
        for(var i =0 ;i < confingOptions.length; i++){
          if(confingOptions[i].value == userVal){
            option = confingOptions[i];
            break;
          }
        }
        return option;
      }
    }
  })
  .factory('localStore', ['$window', function ($window) {
    var resObject = {};
    return {
      //存储单个属性
      set: function (key, value) {
        $window.localStorage[key] = value;
      },
      //读取单个属性
      get: function (key, defaultValue) {
        return $window.localStorage[key] || defaultValue;
      },
      //存储对象，以JSON格式存储
      setObject: function (key, value) {
        $window.localStorage[key] = JSON.stringify(value);
        //异步同步服务端数据
      },
      //读取对象
      getObject: function (key) {
        angular.extend(resObject, JSON.parse($window.localStorage[key] || '{}'));
        return resObject;
      }
    }
  }]);
