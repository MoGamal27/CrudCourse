//const { Router } = require('express');
const express = require('express')
const CoursesController = require('../Controllers/CoursesController')
const router = express.Router();
//const router = Router();


router.get('/api/courses',CoursesController.getAllCourses)
router.post('/api/courses',CoursesController.postCourses)
router.get('/api/courses/:id',CoursesController.getSingleCourse)
router.put('/api/courses/:id',CoursesController.editCourse)
router.delete('/api/courses/:id',CoursesController.deleteCourse)
 module.exports = router;


