const {Router}=require("express");
const rutasCancion=Router();
const ctrCan=require("../controllers/cancionController")
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



rutasCancion.get('/', ctrCan.obtener);
rutasCancion.get('/:id', ctrCan.obtenerid);

rutasCancion.post('/', carga.single('img'),ctrCan.add,);
  
rutasCancion.put('/:id',carga.single('img'),ctrCan.edit);


module.exports=rutasCancion;