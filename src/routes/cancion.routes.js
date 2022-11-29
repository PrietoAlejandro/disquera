const {Router}=require("express");
const rutasUser=Router();
const ctrUser=require("../controllers/cancion.controllers");
const autorizedHuesped=require("../auth/auth.huesped");
const multer=require("multer");
const fecha=Date.now();

const carga=multer({storage:rutaStorage});

rutasUser.get('/', ctrUser.obtener);

rutasUser.get('/:id', ctrUser.obtenerid);

rutasUser.post('/', carga.single('img'),ctrUser.add);

rutasUser.post('/login', ctrUser.login);
  
rutasUser.put('/:id',carga.single('img'),ctrUser.edit);


module.exports=rutasUser;