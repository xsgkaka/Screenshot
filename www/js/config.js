/**
 * Created by xsg on 2016/9/28.
 * 配置内容：与app相关的有配置
 */
var isDev = false;
Config = {};
//编辑器配置
Config.editor = {};
//通用配置android
Config.editor.common = {
  //是否显示运营商, 列表类型
  operatorShowAble:{
    type:"list",
    options:[
      {label:"显示", value:"1"},
      {label:"不显示", value:"0"}
    ]
  },
  //网络类型 列表选择类型
  networkType:{
    type:"list",
    options:[
      {label:"WIFI", value:"WIFI"},
      {label:"3G", value:"3G"},
      {label:"4G", value:"4G"},
      {label:"2G", value:"2G"}
    ]
  },
  //运营商类型 列表选择类型
  operatorType:{
    type:"list",
    options:[
      {label:"中国移动", value:"yd"},
      {label:"中国电信", value:"dx"},
      {label:"中国联通", value:"lt"}
    ]
  },
  //手机信号强度 列表选择类型
  mobileSignalStren:{
    type:"list",
    options:[
      {label:"1", value:"1"},
      {label:"2", value:"2"},
      {label:"3", value:"3"},
      {label:"4", value:"4"},
      {label:"5", value:"5"}
    ]
  },
  //wifi信号强度 列表选择类型
  wifiSignalStren:{
    type:"list",
    options:[
      {label:"1", value:"1"},
      {label:"2", value:"2"},
      {label:"3", value:"3"},
      {label:"4", value:"4"}
    ]
  }
};
//微信配置项
Config.editor.wx = {
  //手机时间 输入框类型
  dateTime:{
    type:"input"
  },
  //微信右上角数字 输入框类型
  wxMesageCount:{
    type:"input"
  },
  nicknamesG:[//备选昵称(女)
    "伊琳娜","",""
  ],
  //微信通讯录
  wxMessages:[




  ]
}





