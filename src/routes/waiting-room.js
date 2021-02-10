const express = require('express');
const router = express.Router();
const R = require('ramda');

let waitingRoom = {
  count: 2,
  patients: [ '1', '2' ]
}

router.get('/', (_, res) => {
  console.log('queried waiting room.');
  res.json(waitingRoom);
});

router.route('/patient/:id')
  .post((req, res) => {
    waitingRoom.count = waitingRoom.count + 1;
    waitingRoom.patients.push(req.params.id);
    res.json(waitingRoom);;
  })
  .delete((req, res) => {
    const neqId = id => id !== req.params.id;
    const transform = {
      count: R.add(-1),
      patients: R.filter(neqId)
    };
    const newWaitingRoom = R.evolve(transform, waitingRoom);
    waitingRoom = newWaitingRoom

    console.log(`removed patient Id: ${req.params.id}`);
    res.json(waitingRoom);
  });

module.exports = router;
