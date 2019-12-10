const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();
///////////
//var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const personController = require('./controllers/person-controller');

//app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));


/////////


//const cors = require('cors');
const db = require("./database/database");

//test DB
db.authenticate()
    .then(() => console.log("Database connected."))
    .catch(err => console.log("Error: " + err));



app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());



 ////
//Carrega as rotas
const indexRoute = require('./routes/index-route');
const personRoute = require('./routes/person-route');
/*const courseRoute = require('./routes/course-route');
const teacherRoute = require('./routes/teacher-route');
const studentRoute = require('/routes/student-route');
const disciplineRoute = require('./routes/discipline-route');
const studentClassRoute = require('/routes/student-class-route');
const classRoute = require('./routes/class-route');
const studentCourseRoute = require('./routes/student-course-route'); */



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


//200 sucesso 201 created   400  erro   401 n autenticato 403 acesso negado
//500 erro na aplicação
app.use('/',indexRoute);
app.use('/person',personRoute);
/*app.use('/course',courseRoute);
app.use('/teacher',teacherRoute);
app.use('/student',studentRoute);
app.use('/class',classRoute);
app.use('/discipline',disciplineRoute);
app.use('/course-student',studentCourseRoute);
app.use('/class-student',studentClassRoute); */


module.exports = app;