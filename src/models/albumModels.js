const { default: mongoose } = require('mongoose');

const Schema = mongoose.Schema({    
    nombreAlbum: String,
    anioPublicacion: String,
    idArtistaFK: String, 
    idGeneroFK: String,
    estadoAlbum: String,
    _id: String
  });

  module.exports=mongoose.model("album",Schema);