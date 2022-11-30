const {Router}=require("express");
const rutasUser=Router();
const ctrUser=require("../controllers/cancion.controllers");
//const autorizedHuesped=require("../auth/auth.huesped");
const multer=require("multer");
const fecha=Date.now();

rutasUser.get('/', ctrUser.obtener);

rutasUser.get('/:id', ctrUser.obtenerid);

rutasUser.post('/login', ctrUser.login);

module.exports=rutasUser;