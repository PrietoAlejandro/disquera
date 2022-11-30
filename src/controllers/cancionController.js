const Cancion = require("../models/cancionModel");

exports.obtener = async (req, res) => {
  try {
    const canciones = await Cancion.find();
    res.status(200).json(canciones);
  } catch (error) {
    res.status(500).json(error)
  }

}
exports.obtenerid = async (req, res) => {
  try {
    const id = req.params.id;
    const canciones = await Cancion.findById(id);
    res.status(200).json(canciones);
  } catch (error) {
    res.status(500).json(error)
  }

}
exports.add = async (req, res) => {
  try {

    //const { nombrehab, numerohab, capacidad, camas, descripcion, wifi, tv, banio, cajafuerte, nevera, valornoche, img, estado } = req.body;
    const newCancion = new Cancion(req.body,req.file)
    console.log(req.file);
    if(req.file){
      const {filename}=req.file;
      newCancion.setImg(filename);
      console.log("si hay imagen")
    }else{
      console.log("No hay imagen")
    }
    await newCancion.save();
    console.log(newCancion);
    res.json({ msj: "Habitación registrada exitosamente", id: newCancion._id })
  } catch (error) {
    res.status(500).json({msj:"Error al registrar"+error})
  }

}

exports.edit = async(req, res) => {
  try {
    const id = req.params.id;
    const newCancion = new Cancion(req.body,req.file)
    console.log(req.file);
    
    if(req.file){
      const {filename}=req.file;
      newCancion.setImg(filename);
      console.log("si hay imagen")
    }else{
      console.log("No hay imagen")
    }
    //console.log(`El id que se va a cambiar estado es ${id}`);
    const cambioCancion = await Cancion.findByIdAndUpdate(id, newCancion);
    res.json({ msj: "Habitación actualizada exitosamente"})
  } catch(error) {
    res.status(500).json(error);
  }
}
