const { default: mongoose } = require('mongoose');

const Schema = mongoose.Schema({    
    nombreAlbum: String,
    anioPublicacion: String,
    idArtistaFK: String, 
    idGeneroFK: String,
    estadoAlbum: String

   /* generoControllers: [{
      type: Schema.Types.Number,
      ref: 'generoModel'
    }],
    cancionControllers: [{
      type: Schema.Types.Number,
      ref: 'Cancion'
    }]*/
  });

  module.exports=mongoose.model("album",Schema);