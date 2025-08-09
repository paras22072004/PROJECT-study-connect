// const express = require('express');
// const { register, login } = require('../controllers/authcontrol');
// const router = express.Router();

// router.post('/signup', register);
// router.post('/login', login);

// module.exports = router;


const express = require('express');
const router = express.Router();
const { signup, login } = require('../controllers/authcontrol');

router.post('/signup', signup);
router.post('/login', login);

module.exports = router;
