/**
 * Created by xsg on 2016/10/13.
 * 工具类
 */
/**
 * 是空(字符串长度为0，对象没有任何属性，或者对象本身就是undefined)返回true，不是空返回false,
 * @param object
 */
var Util = {};
Util.isEmpty = function (object) {
  var flag = true;
  if(typeof (object) == "string" && object != ""){
    flag = false;
  }else if(typeof (object) == "object" &&  object != null && !Util.isNonProp(object)){
    flag = false;
  }
  return flag;
};

/**
 * 判断对象中是没有任何属性的对象，也就是{}对象,如果是，返回true
 * @param object
 */
Util.isNonProp = function (object) {
  var  flag = true;
  for(var key in object){
    flag = false;
    break;
  }
  return flag;
}


/*-----------------------------数组类-----------------------------*/
/**
 * 将目标数组中某一下标的值替换成 给定值
 */
Util.arrayReplaceIndexToTargetV = function (array, index, target) {
  array[index] = target;
  return array;
}
