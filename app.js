// invocamos a express
const express = require('express');
const app = express();

//seteamos urlencoded para capturar los datos del formulario
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// invocamos a dotenv
const dotenv = require('dotenv');
dotenv.config({path:'./env/.env'});

//el directorio public
app.use('/resources', express.static('public'));
app.use('/resources', express.static(__dirname + '/public'));

console.log(__dirname);

//establecemos con el motor de plantillas
app.set('view engine', 'ejs')

//invocamos a bcriptjs
const bcryptjs = require('bcryptjs');

//var. de session
const session = require('express-session');
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized:true
}));

// invocamos a la coneccion a la DB
const connection = require('./database/db');

//esstableciendo las rutas
app.get('/', (req, res)=>{
    res.render('index', {msg:'Esto es un mensaje desde node'});
})

app.get('/login', (req, res)=>{
    res.render('login');
})

app.get('/register', (req, res)=>{
    res.render('register');
})

app.listen(3000, (req, res)=>{
    console.log('SERVER RUNING IN http://localhost:3000');
})