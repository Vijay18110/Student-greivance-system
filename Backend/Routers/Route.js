const express = require('express');

const { data, savedata, getdata, getstudentdata } = require('../Controller/studentController');
const { saveadmindata, getadmindata } = require('../Controller/adminController');
const { savecompaints, getcompaints, deletecom } = require('../Controller/compaintsController');
const router = express.Router();
router.get('/server', data)
router.post('/students', savedata)
router.patch('/students', getdata)
router.post('/admin', saveadmindata)
router.patch('/admin', getadmindata)
router.get('/students', getstudentdata)
router.post('/complaints', savecompaints)
router.get('/complaints', getcompaints)
router.delete('/complaints', deletecom)






exports.router = router;