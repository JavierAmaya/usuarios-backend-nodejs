var express = require('express');
var bodyParser = require('body-parser');
var cors = require ('cors');
//var testModule = require ('./modules/test-module');
var database = require('./modules/database');
var usuariosRouter = require('./routes/usuarios-router');
var cancionesRouter = require('./routes/canciones-router');

var app = express();

app.use(cors()); // permita peticiones de otros origenes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/usuarios',usuariosRouter);
app.use('/canciones',cancionesRouter);


app.listen(9999, ()=>{
    console.log('servidor levantado');
});

app.get('/', (req,res)=>{
    res.send('servidor Backend en linea');
});

