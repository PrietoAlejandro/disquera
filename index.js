const express = require('express');
//const cors = require("cors");
//const morgan = require('morgan');
const {conexionBD} = require('./src/db.conexion');
//const rutasCancion = require('./src/routes/cancion.routes');
//const rutasUser=require('./routes/users.routes');
conexionBD();
const app = express()
//const port= process.env.PORT || 3000;
//Conexión a la BD

app.use(express.json());
//Configuraciones
//app.set("name","disquera");
//app.set("port",process.env.port || 3500);

//Midlewares
//app.use(express.json());
//app.use(morgan("dev"));

//Llamado de rutas
//app.use('/public', express.static('public/upload'));
//app.use('/public', express.static(__dirname + '/public'));
app.use('/api', require('./src/routes/cancionesRoutes'));
//app.use("/api/users",rutasUser);

app.get('/', (req,res)=>{
    res.send('Hola')
})
app.listen(3000)

module.exports=app;