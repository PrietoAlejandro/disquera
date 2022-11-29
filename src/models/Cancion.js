const model=require("mongoose");

const cancionInfo = new Schema({
    nombreCancion: String,
    fechaGrabacion: Date,
    duracionCancion: String, 
    idAlbumFK: String,
    estadoCancion: String,
    _id: Number
  });

  module.exports=model("Cancion",cancionInfo);