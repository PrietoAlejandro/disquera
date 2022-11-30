const album = require("../models/albumModel");

exports.obtener = async (req, res) => {
  try {
    const album = await album.find();
    res.status(200).json(album);
  } catch (error) {
    res.status(500).json(error)
  }

}
exports.obtenerid = async (req, res) => {
  try {
    const id = req.params.id;
    const albumes = await album.findById(id);
    res.status(200).json(albumes);
  } catch (error) {
    res.status(500).json(error)
  }

}
exports.add = async (req, res) => {
  try {

    const newalbum = new album(req.body,req.file)
    console.log(req.file);
    if(req.file){
      const {filename}=req.file;
      newalbum.setImg(filename);
      console.log("si hay imagen")
    }else{
      console.log("No hay imagen")
    }
    await newalbum.save();
    console.log(newalbum);
    res.json({ msj: "Habitación registrada exitosamente", id: newalbum._id })
  } catch (error) {
    res.status(500).json({msj:"Error al registrar"+error})
  }

}

exports.edit = async(req, res) => {
  try {
    const id = req.params.id;
    const newalbum = new album(req.body,req.file)
    console.log(req.file);
    
    if(req.file){
      const {filename}=req.file;
      newalbum.setImg(filename);
      console.log("si hay imagen")
    }else{
      console.log("No hay imagen")
    }
    //console.log(`El id que se va a cambiar estado es ${id}`);
    const cambioalbum = await album.findByIdAndUpdate(id, newalbum);
    res.json({ msj: "Habitación actualizada exitosamente"})
  } catch(error) {
    res.status(500).json(error);
  }
}