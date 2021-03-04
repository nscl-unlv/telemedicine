const R = require('ramda');

function strMapToObj(map) {
  let arr = []
  for (let [k,v] of map) {
    const sid = R.assoc('sid', k, {}); 
    const uid = R.assoc('uid', v, {}); 
    const makePeer = R.compose(R.mergeLeft(sid), R.mergeLeft(uid))
    const newPeer = makePeer({});

    arr = R.append(newPeer, arr);
  }
  return arr;
}

module.exports = { strMapToObj }
