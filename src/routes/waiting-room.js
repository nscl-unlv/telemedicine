const express = require('express');
const router = express.Router();
const R = require('ramda');

// TEST
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
    const transform = {
      count: R.add(1),
      patients: R.append(req.params.id)
    };

    const newWaitingRoom = R.evolve(transform, waitingRoom);
    waitingRoom = newWaitingRoom;

    console.log(`added patient to waiting room: ${req.params.id}`);
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

    console.log(`removed patient from waitin room: ${req.params.id}`);
    res.json(waitingRoom);
  });

module.exports = router;
