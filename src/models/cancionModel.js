const {Schema,model}=require("mongoose");

const cancionesSchema = new Schema({
    nombreCancion: String,
    fechaGrabacion: String,
    duracionCancion: Number,
    estadoCancion: String, 
    _id: String
  });

  cancionesSchema.methods.setImg=function setImg(filename) {
      this.img=`http://localhost:3500/public/${filename}`;
      console.log("entró al método "+this.img);
  }

 
  
  module.exports=model("Canciones",cancionesSchema);