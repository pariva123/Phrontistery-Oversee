let router = require('express').Router();
var multer  = require('multer')
var path = require('path')

var authcontroller = require('../controllers/teacher/authController');
var coursecontroller = require('../controllers/teacher/courseController');
var subjectcontroller = require('../controllers/teacher/subjectController');
var timetablecontroller = require('../controllers/teacher/timetableController');
var assignmentcontroller = require('../controllers/teacher/assignmentController');
var notescontroller = require('../controllers/teacher/notesController');
var attendancecontroller = require('../controllers/teacher/attendanceController');

/**
 * Time table uploading
 */
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './server/public/timetable/')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
    }
  })
var upload = multer({ storage: storage })

/**
 * Assignment uploading
 */
var storage1 = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/assignment/')
    },
    filename: function (req, file, cb) {
      cb(null,file.originalname)
    }
  })
var upload1 = multer({ storage: storage1 })

/**
 * Notes uploading
 */
var storage2 = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/notes/')
    },
    filename: function (req, file, cb) {
      cb(null,file.originalname)
    }
  })
var upload2 = multer({ storage: storage2 })


/**
 * Auth 
 */
router.post('/login',authcontroller.login)
router.get('/logout',authcontroller.logout)

/**
 * Courses
 */
router.get('/getCourse',coursecontroller.getcourse)
router.get('/getCourseById/:id',coursecontroller.getcoursebyid) 

/**
 * Subjects
 */
router.get('/getSubject',subjectcontroller.getsubject)

/**
 * Time Table
 */
router.post('/addTimetable',upload.single('timetable_name'),timetablecontroller.addtimetable)
router.get('/getTimetable',timetablecontroller.gettimetable)

/**
 * Assignment
 */
router.post('/addAssignment',upload1.single('document'),assignmentcontroller.addassignment)
router.get('/getAssignment',assignmentcontroller.getassignment)
router.get('/getAssignmentbyid/:id',assignmentcontroller.getassignmentbyid)
router.delete('/deleteAssignment/:id',assignmentcontroller.deleteassignment)
router.post('/getAssignmentAnswer',assignmentcontroller.getassignmentanswer)
router.get('/getAssignmentAnswerbyid/:id',assignmentcontroller.getassignmentanswerbyid)
router.post('/assignMarks',assignmentcontroller.assignmarks)

/**
 * Notes
 */
router.post('/addNotes',upload2.single('document'),notescontroller.addnotes)
router.get('/getNotes',notescontroller.getnotes)
router.get('/getnotesbyid/:id', notescontroller.getnotesbyid)
router.delete('/deleteNotes/:id',notescontroller.deletenotes)

/**
 * Marks Attendance
 */
router.post('/addAttendance', attendancecontroller.addattendance)
router.get('/getAttendance', attendancecontroller.getAttendance)
router.post('/getAttendanceWithDate', attendancecontroller.getAttendanceWithDate)
router.post('/getStudentByCourse',attendancecontroller.getstudentbycourse)


/**
 * Comment
 */
 router.post('/addComment',assignmentcontroller.addcomment)
 
module.exports = router