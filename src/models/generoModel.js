const {Schema,model}=require("mongoose");

const generoSchema = new Schema({
    nombreGenero: String,
    estadoGenero: String,
    _id: Number
  });

  generoSchema.methods.setImg=function setImg(filename) {
      this.img=`http://localhost:3500/public/${filename}`;
      console.log("entró al método "+this.img);
  }

  module.exports=model("Genero",generoSchema);