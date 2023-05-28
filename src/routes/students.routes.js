const express = require('express');
const router = express.Router();
const student = require('../controller/student.controller');

router.get('/', student.getAllStudents);
router.post('/create', student.newStudent);
router.put('/update/:id', student.updateStudent);
router.get('/filter', student.filterStudents);

module.exports = router;
