const {Router}=require("express");
const rutasCancion=Router();
const ctrCan=require("../controllers/cancionController");
//const autorizedHuesped=require("../auth/auth.huesped");
const multer=require("multer");

rutasCancion.get('/canciones', ctrCan.obtener);

rutasCancion.get('/canciones/:id', ctrCan.obtenerid);

rutasCancion.put('/canciones/:id', ctrCan.edit);

rutasCancion.post('/canciones', ctrCan.add);

/*rutasCancion.post('/login', ctrCan.login);*/

module.exports=rutasCancion;