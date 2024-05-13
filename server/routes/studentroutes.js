let router = require('express').Router();
var multer  = require('multer')
var path = require('path')

var authcontroller = require('../controllers/student/authController');
var subjectcontroller = require('../controllers/student/subjectController');
var timetablecontroller = require('../controllers/student/timetableController');
var assignmentcontroller = require('../controllers/student/assignmentController');
var notescontroller = require('../controllers/student/notesController');

/**
 * Answer Assignment
 */
 var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/answer_assignment/')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
var upload = multer({ storage: storage })


/**
 * Auth 
 */
router.post('/login',authcontroller.login)
router.get('/logout',authcontroller.logout)

/**
 * Subjects
 */
router.get('/getSubject/:id',subjectcontroller.getsubject)

/**
 * Time Table
 */
router.get('/getTimetable',timetablecontroller.gettimetable)

/**
 * Assignment
 */
router.get('/getAssignment/:id',assignmentcontroller.getassignment)
router.post('/answerAssignment',upload.single('answer_sheet'),assignmentcontroller.answerassignment)
router.get('/getAssignmentAnswer/:id',assignmentcontroller.getassignmentanswer)

/**
 * Notes
 */
router.get('/getNotes/:id',notescontroller.getnotes)

/**
 * Comment
 */
router.post('/addComment',assignmentcontroller.addcomment)
module.exports = router