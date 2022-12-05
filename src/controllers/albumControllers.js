const Album = require("../models/albumModels");

exports.obtener = async (req, res) => {
  const albums = await Album.find()
    res.status(200).json(albums)

}
exports.obtenerid = async (req, res) => {
  try {
    const id = req.params.id;
    const albums = await Album.findById(id);
    res.status(200).json(albums);
  } catch (error) {
    res.status(500).json(error)
  }

}
exports.add = async (req, res) => {
  try 
  {
    const { nombreAlbum, anioPublicacion, idArtistaFK, idGeneroFK, estadoAlbum } = req.body
    console.log(Album)

    if (nombreAlbum && anioPublicacion && idArtistaFK && idGeneroFK && estadoAlbum) 
    {
        const newAlbum = new Album({ nombreAlbum, anioPublicacion, idArtistaFK, idGeneroFK, estadoAlbum })
        await newAlbum.save()

        res.json({ mensaje: "Album registrado exitosamente", id: newAlbum.id })
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
    const newAlbum = new Album(req.body,req.file)
    console.log(req.file);
  
    //console.log(`El id que se va a cambiar estado es ${id}`);
    const cambioAlbum = await Album.findByIdAndUpdate(id, newAlbum);
    res.json({ msj: "Album actualizada exitosamente"})
  } catch(error) {
    res.status(500).json(error);
  }
}
