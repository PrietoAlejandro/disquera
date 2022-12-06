const express = require('express');
//const cors = require("cors");
//const morgan = require('morgan');
const {conexionBD} = require('./src/db.conexion');
//const rutasCancion = require('./src/routes/cancion.routes');
//const rutasUser=require('./routes/users.routes');
//Conexión a la BD
conexionBD();
const app = express()
const PORT= process.env.PORT || 3000;

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.use(express.json());

//Llamado de rutas
app.use('/', express.static('../public/index'));
app.use('/api', require('./src/routes/cancionesRoutes'));
app.use('/api', require('./src/routes/albumsRoutes'));
app.use('/api', require('./src/routes/generoRoutes'));

//app.use("/api/users",rutasUser);

app.listen(PORT)

module.exports=app;