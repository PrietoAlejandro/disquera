const express = require('express');
//const cors = require("cors");
//const morgan = require('morgan');
const {conexionBD} = require('./src/db.conexion');
//const rutasCancion = require('./src/routes/cancion.routes');
//const rutasUser=require('./routes/users.routes');
//Conexión a la BD
conexionBD();
const app = express()
//const port= process.env.PORT || 3000;

app.use(express.json());

//Llamado de rutas
app.use('/api', require('./src/routes/cancionesRoutes'));
app.use('/api', require('./src/routes/albumsRoutes'));
//app.use("/api/users",rutasUser);

app.get('/', (req,res)=>{
    res.send('Hola')
})
app.listen(3000)

module.exports=app;