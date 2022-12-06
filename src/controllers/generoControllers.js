const Genero = require("../models/generoModels");

exports.obtener = async (req, res) => {
  const generos = await Genero.find()
    res.status(200).json(generos)

}
exports.obtenerid = async (req, res) => {
  try {
    const id = req.params.id;
    const generos = await Genero.findById(id);
    res.status(200).json(generos);
  } catch (error) {
    res.status(500).json(error)
  }

}
exports.add = async (req, res) => {
  try 
  {
    const { nombreGenero, estadoGenero } = req.body
    console.log(Genero)

    if (nombreGenero && estadoGenero) 
    {
        const newGenero = new Genero({ nombreGenero, estadoGenero })
        await newGenero.save()

        res.json({ mensaje: "Genero registrado exitosamente", id: newGenero.id })
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
    const newGenero = new Genero(req.body,req.file)
    console.log(req.file);
    
    //console.log(`El id que se va a cambiar estado es ${id}`);
    const cambioGenero = await Genero.findByIdAndUpdate(id, newGenero);
    res.json({ msj: "Genero actualizada exitosamente"})
  } catch(error) {
    res.status(500).json(error);
  }
}
