function strMapToObj(map) {
  let obj = {};
  for (let [k,v] of map) {
    obj[k.toString()] = v;
  }
  return obj;
}

module.exports = { strMapToObj }
