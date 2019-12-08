const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

//Carrega as rotas
const indexRoute = require('./routes/index-route');
const personRoute = require('./routes/person-route');
const courseRoute = require('./routes/course-route');
const teacherRoute = require('./routes/teacher-route');
const studentRoute = require('/routes/student-route');
const disciplineRoute = require('./routes/discipline-route');
const studentClassRoute = require('/routes/student-class-route');
const classRoute = require('./routes/class-route');
const courseStudentRoute = require('./routes/course-student-route');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));



//200 sucesso 201 created   400  erro   401 n autenticato 403 acesso negado
//500 erro na aplicação
app.use('/',indexRoute);
app.use('/person',personRoute);
app.use('/course',courseRoute);
app.use('/teacher',teacherRoute);
app.use('/student',studentRoute);
app.use('/class',classRoute);
app.use('/discipline',disciplineRoute);
app.use('/course-student',courseStudentRoute);
app.use('/class-student',studentClassRoute);


module.exports = app;