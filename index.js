const express = require('express');
const bodyParser = require('body-parser');

const courseRouter = require('../CrudCourse (1)/Routes/CoursesRoute')

const app = express();
app.use(bodyParser.json());
app.use(express.json());

app.use('/',courseRouter);



app.listen(4000,()=>{
    console.log('listining port 4000');
})