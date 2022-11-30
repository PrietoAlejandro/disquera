const {Schema,model}=require("mongoose");

const albumSchema = new Schema({
    nombreAlbumn: String,
    anioPublicacion: Date,
    estadoAlbum: Number,
    _id: String
  });

  albumSchema.methods.setImg=function setImg(filename) {
      this.img=`http://localhost:3500/public/${filename}`;
      console.log("entró al método "+this.img);
  }

 
  
  module.exports=model("Album",albumSchema);