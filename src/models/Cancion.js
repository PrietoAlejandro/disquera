const {Schema,model}=require("mongoose");

const cancionSchema = new Schema({
    nombreCancion: String,
    fechaGrabacion: Date,
    duracionCancion: String, 
    idAlbumFK: String,
    estadoCancion: String,
    _id: Number
  });

  module.exports=model("Cancion",cancionSchema);