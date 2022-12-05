const { default: mongoose } = require('mongoose');

const Schema = mongoose.Schema({    
    nombreGenero: String,
    estadoGenero: String
  });

  module.exports=mongoose.model("genero",Schema);