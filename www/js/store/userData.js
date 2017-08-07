/**
 * Created by xsg on 2016/10/1.
 * APP 的所有data，data初始化之后，将所有数据存储到localStore，通过localStore,与服务端保持同步
 */
var LOCALSTORESTR = "com.xsg.YZJTUserData";
angular.module("starter.services.dataServices", [])
  .factory("YZJTUserData", function () {
    return {
      editor:{//编辑器配置
        common:{//编辑器通用配置
          operatorShowAble:{
            value:"1",
            label:"显示"
          },
          operatorType:{//运营商类型
            value:"lt",
            label:"中国联通"
          },
          networkType:{//网络类型
            value:"WIFI",
            label:"WIFI"
          }
        },
        wx:{//微信编辑器相关的配置项
          nicknames:[//备选昵称

          ]
        }
      }
    }
  });


