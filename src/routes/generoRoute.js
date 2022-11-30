const {Router}=require("express");
const rutasGenero=Router();
const ctrGer=require("../controllers/generoController")
const multer=require("multer");
const fecha=Date.now();

const rutaStorage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './public/upload/');
    },
    filename:function(req,file,callback){
        console.log(file);
        callback(null,fecha+"_"+file.originalname);
    }
});

const carga=multer({storage:rutaStorage});



rutasGenero.get('/', ctrGer.obtener);
rutasGenero.get('/:id', ctrGer.obtenerid);

rutasGenero.post('/', carga.single('img'),ctrGer.add,);
  
rutasGenero.put('/:id',carga.single('img'),ctrGer.edit);


module.exports=rutasGenero;