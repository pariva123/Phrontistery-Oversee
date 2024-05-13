let express = require('express')
let bodyParser = require('body-parser');
var cors = require('cors')
var app = express()
 
app.use(cors())

var port = process.env.PORT || 8080;

app.use('/public',express.static('public'));

app.get('/', (req, res) => res.send('Welcome to Express'));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())

require('./config/db')

let adminroutes = require('./routes/adminroutes');
let teacherroutes = require('./routes/teacherroutes');
let studentroutes = require('./routes/studentroutes');

app.use('/admin',adminroutes)
app.use('/teacher',teacherroutes)
app.use('/student',studentroutes)

app.listen(port, function() {
    console.log("Running on Port "+ port);
})