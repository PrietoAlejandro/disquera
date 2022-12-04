const {Router}=require("express");
const rutasCancion=Router();
const ctrCan=require("../controllers/cancionController");
//const autorizedHuesped=require("../auth/auth.huesped");

rutasCancion.get('/canciones', ctrCan.obtener);

rutasCancion.get('/canciones/:id', ctrCan.obtenerid);

/*rutasCancion.post('/login', ctrCan.login);*/

module.exports=rutasCancion;