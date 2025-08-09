// const express = require('express');
// const { getMessages, sendMessage } = require('../controllers/messagecontrol');
// const router = express.Router();

// router.get('/', getMessages);
// router.post('/', sendMessage);

// module.exports = router;


const express = require('express');
const router = express.Router();
const { getMessages, postMessage } = require('../controllers/messagecontrol');

router.get('/', getMessages);
router.post('/', postMessage);

module.exports = router;
