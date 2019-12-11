'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('sequelize');
//const config = require('./config');

const app = express();
const router = express.Router();

//const cors = require('cors');
const db = require("./database/database");

//test DB
db.authenticate()
    .then(() => console.log("Database connected."))
    .catch(err => console.log("Error: " + err));


// Carrega os Models
const Person = require('./models/person');
const Student = require('./models/student');
const Course = require('./models/course');
const Student_course = require('./models/student-course');


 ////
//Carrega as rotas
const indexRoute = require('./routes/index-route');
const personRoute = require('./routes/person-route');
const courseRoute = require('./routes/course-route');
//const teacherRoute = require('./routes/teacher-route');
const studentRoute = require('./routes/student-route');
/*const disciplineRoute = require('./routes/discipline-route');
const studentClassRoute = require('/routes/student-class-route');
const classRoute = require('./routes/class-route');*/
const studentCourseRoute = require('./routes/student-course-route'); 

app.use(bodyParser.json({
  limit: '5mb'
}));
app.use(bodyParser.urlencoded({
  extended: false
}));

// Habilita o CORS
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});




//200 sucesso 201 created   400  erro   401 n autenticato 403 acesso negado
//500 erro na aplicação
app.use('/',indexRoute);
app.use('/person',personRoute);
app.use('/course',courseRoute);
//app.use('/teacher',teacherRoute);
app.use('/student',studentRoute);
//app.use('/class',classRoute);
//app.use('/discipline',disciplineRoute);
app.use('/course-student',studentCourseRoute);
//app.use('/class-student',studentClassRoute); 


module.exports = app;