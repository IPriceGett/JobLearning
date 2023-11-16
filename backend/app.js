const express = require('express');
var cors = require('cors')
var bodyParser = require('body-parser');
const userRouter = require('../backend/routers/user.router')
const jobRouter = require('../backend/routers/job.router')
const userjobRouter = require('../backend/routers/user_job.router')
const PORT = 5000;

const app = express();

app.use(cors({
  origin: '*'
}));

app.use(bodyParser.json({limit: '50mb'}));

app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(express.static('uploads'));

app.use('/user',userRouter);

app.use('/job',jobRouter);

app.use('/userjob',userjobRouter);

app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});