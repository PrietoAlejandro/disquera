const mongoose = require('mongoose');
require('dotenv').config();
const conexionBD=async()=>{
    
    try{
        await mongoose.connect(process.env.conexion);
            console.log(`conectado`)
    }
    catch(error){
        console.log(error);
    }
}

module.exports={conexionBD};