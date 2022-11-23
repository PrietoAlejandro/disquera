const mongoose = require('mongoose');
const conexionBD=async()=>{
    
    try{
        const DB=await mongoose.connect('mongodb+srv://Prieto:<password>@disquera.gavkvmw.mongodb.net/?retryWrites=true&w=majority');
        console.log("Conexión satisfactoria",DB.connection.name);
    }
    catch(  error){
        console.log(error);
    }
}

module.exports=conexionBD;