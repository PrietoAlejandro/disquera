const { default: mongoose } = require('mongoose');

const Schema = mongoose.Schema({
    nombreCancion: String,
    fechaGrabacion: String,
    duracionCancion: String, 
    idAlbumFK: String,
    estadoCancion: String,
    _id: String
  });

  module.exports=mongoose.model("Cancion",Schema);