function strMapToObj(map) {
  let arr = []
  for (let [k,v] of map) {
    let obj = {};
    obj.sid = k;
    obj.uid = v;
    arr.push(obj);
  }
  return arr;
}

module.exports = { strMapToObj }
