const express = require('express');
const router = express.Router();

const {getalluser, updateuser, deleteuser} = require('../controllers/userController');

router.get('/', getalluser);
router.get('/delete', deleteuser);
router.get('/update', updateuser);


module.exports = router;