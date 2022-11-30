const genero = require("../models/generoModel");

exports.obtener = async (req, res) => {
  try {
    const generos = await genero.find();
    res.status(200).json(generos);
  } catch (error) {
    res.status(500).json(error)
  }

}
exports.obtenerid = async (req, res) => {
  try {
    const id = req.params.id;
    const generos = await genero.findById(id);
    res.status(200).json(generos);
  } catch (error) {
    res.status(500).json(error)
  }

}
exports.add = async (req, res) => {
  try {

    const newgenero = new genero(req.body,req.file)
    console.log(req.file);
    if(req.file){
      const {filename}=req.file;
      newgenero.setImg(filename);
      console.log("si hay imagen")
    }else{
      console.log("No hay imagen")
    }
    await newgenero.save();
    console.log(newgenero);
    res.json({ msj: "Habitación registrada exitosamente", id: newgenero._id })
  } catch (error) {
    res.status(500).json({msj:"Error al registrar"+error})
  }

}

exports.edit = async(req, res) => {
  try {
    const id = req.params.id;
    const newgenero = new genero(req.body,req.file)
    console.log(req.file);
    
    if(req.file){
      const {filename}=req.file;
      newgenero.setImg(filename);
      console.log("si hay imagen")
    }else{
      console.log("No hay imagen")
    }
    //console.log(`El id que se va a cambiar estado es ${id}`);
    const cambiogenero = await genero.findByIdAndUpdate(id, newgenero);
    res.json({ msj: "Habitación actualizada exitosamente"})
  } catch(error) {
    res.status(500).json(error);
  }
}