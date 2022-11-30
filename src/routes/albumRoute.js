const {Router}=require("express");
const rutasAlbum=Router();
const ctrAlb=require("../controllers/albumController")
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



rutasAlbum.get('/', ctrAlb.obtener);

rutasAlbum.get('/:id', ctrAlb.obtenerid);

rutasAlbum.post('/', carga.single('img'),ctrAlb.add,);
  
rutasAlbum.put('/:id',carga.single('img'),ctrAlb.edit);


module.exports=rutasAlbum;