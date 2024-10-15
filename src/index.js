
let utils={
  /**
   * 判断是否为手机号
   * @param  {String|Number}  str
   * @return {Boolean}
   */
  isPhoneNum:function(str){
    return /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(str)
  },
  /**
   * 设置sessionStorage    
   */
  savesessionStorage: function(key,vla){
    return window.sessionStorage.setItem(key, vla)
  },
  getsessionStorage : function(key){
    return window.sessionStorage.getItem(key)
  },
  removesessionItem:function (key) {
    return window.sessionStorage.removeItem(key)
  },
  /**
   * 设置localStorage
   */
  savelocalStorage: function(key,vla){
    return window.localStorage.setItem(key, vla)
  },
  getlocalStorage : function(key){
    return window.localStorage.getItem(key)
  },
  removelocalItem : function (key) {
    return window.localStorage.removeItem(key)
  },
  /**
   * 转换时间格式
   * @param  type  'date' 'time' 'min'
   * @param  time   时间戳
   * @return 对应时间格式
   */
  gettime: function (type,time) {
    type = type || 'date'
    time = time ? parseInt(time, 10) : null
    let  result = '---'
    if (time) {
      let  tdate = new Date(time * 1000)
      let  year = tdate.getFullYear()
      let  month = tdate.getMonth() + 1
      let  date = tdate.getDate()
      let  hour = tdate.getHours()
      let  minute = tdate.getMinutes()
      let  second = tdate.getSeconds()
      month = month > 9 ? month : '0' + month
      date = date > 9 ? date : '0' + date
      hour = hour > 9 ? hour : '0' + hour
      minute = minute > 9 ? minute : '0' + minute
      second = second > 9 ? second : '0' + second
      result = [year, month, date].join('-')
      if (type == 'time') {
          result += ' ' + [hour, minute, second].join(':')
      }
      if(type == 'min'){
        result += ' ' + [hour, minute].join(':')
      }
    }
    return result
  },
  /**
   * 置空对象中key为null或undefined
   * @param  {Object}  data
   * @return key有值
   */
  filtering:function(data) {
    var reset = {};
    if(typeof(data)=='object'){
      Object.keys(obj).forEach(function(key){
        if(obj[key]==null || obj[key]==undefined){
          reset[key] = "";
        }else{
          reset[key] = obj[key];
        }
      });
    }
    return reset
  },
  dropobjectItem:function(obj){
      let  param = {};
      if ( obj === null || obj === undefined || obj === "" ) return param;
      for ( let  key in obj ){
          if ( obj[key] !== null && obj[key] !== undefined && obj[key] !== "" ){
              param[key] = obj[key];
          }
      }
      return param;
  },
  /**
   * 获取url参数
   * @param  {String}  name
   * @return {String}  value
   */
  getUrlParam:function (name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return decodeURIComponent(r[2]);
      return null;
  }
}

export default utils
