function add(a,b) {
  // 实现该函数
  //reverse
  var aList = a.split('').reverse();
  var bList = b.split('').reverse();
  var max = Math.max(aList.length,  bList .length);
  //result
  var cList = [];
  //carry bit
  var flag = 0;

  for (var i = 0, l = max; i < l; i++) {
    var tmp = (+aList[i] || 0) + (+bList[i] || 0) + flag;
    flag = 0;
    if (tmp > 9) {
        tmp -= 10;
        flag = 1;
    }
    cList.push(tmp);
  }
  if (flag === 1) {
    cList.push(flag);
  }
  var result = cList.reverse().join('');

  console.log('add result>>>', result);
  return result;
}

function add1(a, b) {
  let rs = [];
  while(a.length || b.length ) {
    rs.push(parseInt(a.substr(-14)||0, 10) + parseInt(b.substr(-14)||0, 10));
    a = a.substr(0, a.length-14);
    b = b.substr(0, b.length-14);
  }
  let u=0, o = '';
  while(rs.length){
    let tmp = (rs.shift() + u).toString();
    o = tmp.substr(-14) + o;
    u = parseInt(tmp.substr(0, tmp.length-14)|| 0, 10);
  }
  console.log('add1 result:', o);
  return o;
}

function add2(a, b) {
  let u = 0, o = '';
  var a = a.split(''), b = b.split('');
  while(a.length || b.length || u) {
    u += ~~a.pop() + ~~b.pop();
    o = u % 10 + o;
    u = u > 9;

  }
  console.log('add2 result:', o);
  return o.replace(/^0+/, '');
}

function add3(a, b) {
  let u = 0, o = '';
  while(a.length || b.length || u) {
    u += parseInt(a.substr(-14)||0, 10) + parseInt(b.substr(-14)||0, 10);
    u = u.toString();
    o = u.substr(-14) + o;
    u = parseInt(u.substr(0, u.length-14)||0, 10);
    a = a.substr(0, a.length-14);
    b = b.substr(0, b.length-14);
  }
  console.log('add3 result:', o);
  return o;
}

module.exports = {
  add,
  add1,
  add2,
  add3
}
