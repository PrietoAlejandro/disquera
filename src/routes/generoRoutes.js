const {Router}=require("express");
const rutasGenero=Router();
const ctrGen=require("../controllers/generoControllers");
//const autorizedHuesped=require("../auth/auth.huesped");
const multer=require("multer");

rutasGenero.get('/genero', ctrGen.obtener);

rutasGenero.get('/genero/:id', ctrGen.obtenerid);

/*rutasCancion.post('/login', ctrCan.login);*/

module.exports=rutasGenero;