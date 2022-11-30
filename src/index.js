const express = require('express');
const morgan = require('morgan');
const conexionBD = require('./db.conexion');
const rutasAlbum = require('./routes/albumRoute');
const rutasCancion = require('./routes/cancionRoute');
const rutasGenero=require('./routes/generoRoute');
const app = express()
const port= process.env.PORT || 3000;
//Conexión a la BD
conexionBD();

//Configuraciones
app.set("port",process.env.port || 3500);
app.set("name","api-Disquera");

//Midlewares
app.use(express.json());
app.use(morgan("dev"));

//Llamado de rutas
app.use('/public', express.static('public/upload'));
//app.use('/public', express.static(__dirname + '/public'));
app.use("/api/album",rutasAlbum);
app.use("/api/cancion",rutasCancion);
app.use("/api/genero",rutasGenero);



module.exports=app;