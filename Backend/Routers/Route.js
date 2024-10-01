const express = require('express');

const { data, savedata, getdata, getstudentdata } = require('../Controller/studentController');
const { saveadmindata, getadmindata } = require('../Controller/adminController');
const { savecompaints, getcompaints, deletecom, updatecom, getsomedata } = require('../Controller/compaintsController');
const { saveresolverdata, getresolverdata } = require('../Controller/resolverController');
const router = express.Router();
router.get('/server', data)
router.post('/students', savedata)
router.patch('/students', getdata)
router.post('/admin', saveadmindata)
router.patch('/admin', getadmindata)
router.patch('/complaints', getsomedata)

router.get('/students', getstudentdata)
router.post('/complaints', savecompaints)
router.get('/complaints', getcompaints)
router.delete('/complaints', deletecom)
router.post('/resolver', saveresolverdata)
router.patch('/resolver', getresolverdata)
router.put('/complaints', updatecom)









exports.router = router;