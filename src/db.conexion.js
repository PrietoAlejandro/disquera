const mongoose = require('mongoose');
//require('dotenv').config();

const conexionBD = async()=>{
      try{
            const BD=await mongoose.connect('mongodb+srv://Prieto:ALEJANDRO1014179072@disquera.gavkvmw.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true});
            console.error("Conexión satisfactoria",BD.connection.name); 
      }catch(error){
            console.error(error);
      }
}
module.exports = {conexionBD}