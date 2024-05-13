let router = require('express').Router();
var multer  = require('multer')
var path = require('path')

var authcontroller = require('../controllers/admin/authController');
var coursecontroller = require('../controllers/admin/courseController');
var subjectcontroller = require('../controllers/admin/subjectController');
var teachercontroller = require('../controllers/admin/teacherController');
var studentcontroller = require('../controllers/admin/studentController');
var alotteachercontroller = require('../controllers/admin/alotteacherController');
var assignmentcontroller = require('../controllers/admin/assignmentController');
var notescontroller = require('../controllers/admin/notesController');

/**
 * Admin Auth 
 */
router.post('/register',authcontroller.register)
router.post('/login',authcontroller.login)
router.get('/logout',authcontroller.logout)

/**
 * Courses
 */
router.post('/addCourse',coursecontroller.addcourse)
router.get('/getCourse',coursecontroller.getcourse)
router.get('/getCourseById/:id',coursecontroller.getcoursebyid)
router.post('/updateCourse/:id',coursecontroller.updatecourse)
router.delete('/deleteCourse/:id',coursecontroller.deletecourse)

/**
 * Subjects
 */
router.post('/addSubject',subjectcontroller.addsubject)
router.get('/getSubject',subjectcontroller.getsubject)
router.get('/getSubjectById/:id',subjectcontroller.getsubjectbyid)
router.post('/updateSubject/:id',subjectcontroller.updatesubject)
router.delete('/deleteSubject/:id',subjectcontroller.deletesubject)

/**
 * Teacher
 */
router.post('/addTeacher',teachercontroller.addteacher)
router.post('/teacherUpdate/:id',teachercontroller.teacherUpdate)
router.get('/getTeacher',teachercontroller.getteacher)
router.get('/getTeacherById/:id',teachercontroller.getteacherbyid)
router.delete('/deleteTeacher/:id',teachercontroller.deleteteacher)


/**
 * Student 
 */
router.post('/addStudent',studentcontroller.addstudent)
router.post('/studentUpdate/:id',studentcontroller.studentUpdate)
router.get('/getStudent',studentcontroller.getstudent)
router.get('/getstudentid', studentcontroller.getstudentid)
router.get('/getStudentById/:id',studentcontroller.getstudentbyid)
router.delete('/deleteStudent/:id',studentcontroller.deletestudent)

/**
 * ALot Teacher
 */
router.post('/alotTeacher',alotteachercontroller.alotteacher)
router.get('/getAlottedTeacher',alotteachercontroller.getalottedteacher)
router.delete('/deleteAlotted/:id',alotteachercontroller.deletealotted)

/**
 * Assignment
 */
router.get('/getAssignment',assignmentcontroller.getassignment)
 
/**
 * Notes
 */
router.get('/getNotes',notescontroller.getnotes)
 
module.exports = router