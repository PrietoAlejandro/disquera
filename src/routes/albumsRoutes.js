const {Router}=require("express");
const rutasAlbum=Router();
const ctrAlb=require("../controllers/albumControllers");
//const autorizedHuesped=require("../auth/auth.huesped");

rutasAlbum.get('/albums', ctrAlb.obtener);

//rutasAlbum.get('/album/id', ctrAlb.obtenerid);

/*rutasCancion.post('/login', ctrCan.login);*/

module.exports=rutasAlbum;