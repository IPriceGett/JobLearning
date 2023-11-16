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

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});


app.use(bodyParser.json({limit: '50mb'}));

app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(express.static('uploads'));

app.use('/user',userRouter);

app.use('/job',jobRouter);

app.use('/userjob',userjobRouter);

app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});