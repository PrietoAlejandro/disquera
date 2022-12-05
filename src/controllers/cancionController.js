const Cancion = require("../models/Cancion");

exports.obtener = async (req, res) => {
  const canciones = await Cancion.find()
    res.status(200).json(canciones)

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
  try 
  {
    const { nombreCancion, fechaGrabacion, duracionCancion, idAlbumFK, estadoCancion } = req.body
    console.log(Cancion)

    if (nombreCancion && fechaGrabacion && duracionCancion && idAlbumFK && estadoCancion) 
    {
        const newCancion = new Cancion({ nombreCancion, fechaGrabacion, duracionCancion, idAlbumFK, estadoCancion })
        await newCancion.save()

        res.json({ mensaje: "Cliente registrado exitosamente", id: newCancion.id })
    } 
    else 
    {
        res.json({ mensaje: "Por favor relleno todos los campos" })
    }
      } catch (error) {
    res.json(error)
  }

}

exports.edit = async(req, res) => {
  try {
    const id = req.params.id;
    const newCancion = new Cancion(req.body,req.file)
    console.log(req.file);
    
    const cambioCancion = await Cancion.findByIdAndUpdate(id, newCancion);
    res.json({ msj: "Cancion actualizada exitosamente"})
  } catch(error) {
    res.status(500).json(error);
  }
}
