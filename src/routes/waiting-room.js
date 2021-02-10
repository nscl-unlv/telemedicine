const express = require('express');
const router = express.Router();

router.get('/', (_, res) => {
  console.log('/waitingroom queryied');
  res.send('response from server');
});

module.exports = router;
