function main(){
  console.log(gfn.getTimeStamp());
}

var gfn = {
  /** [숫자 자릿수 채우기] */
  leadingZeros : function(n, len){
    var z = '';
    n = n.toString();
    if (n.length < len) {
      for (var i = 0; i < len - n.length; i++)
        z += '0';
    }
    return z + n;
  },
  /** [timestamp 'yyyymmddhh24miss'] */
  getTimeStamp : function(){
    var d = new Date();
    var s =
      gfn.leadingZeros(d.getFullYear(), 4) +
      gfn.leadingZeros(d.getMonth() + 1, 2) +
      gfn.leadingZeros(d.getDate(), 2) +
      gfn.leadingZeros(d.getHours()+9, 2) +
      gfn.leadingZeros(d.getMinutes(), 2) +
      gfn.leadingZeros(d.getSeconds(), 2);
    return s;
  },

  /** [val 체크 후 empty면 defaultVal 반환] */
  getValue : function(val, defaultVal) {
  try {
    // Date type 체크
    if (val instanceof Date && !isNaN(val.getTime())){
      return val;

    } else if (val == "" || val == null || val == undefined
      || (val != null && typeof val == "object" && !Object.keys(val).length)) {
  		return defaultVal;

  	} else {
  		return val;
  	}
  } catch (e) {
    return defaultVal;
  }
}

main();
