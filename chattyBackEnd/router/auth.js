/*
 path: api/login
*/
const{ Router } = require('express');
const { check } = require('express-validator');
const { crearUsuario, login, renewToken } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const router = Router();
//crear nuevos usuarios
router.post( '/new',[
    check('nombre','el nombre es obligatorio').not().isEmpty(),
    check('password','el password es obligatorio').not().isEmpty(),
    check('email','el email es obligatorio').isEmail(),
    validarCampos
],crearUsuario);
/*
    nombre: string,
    password: string,
    email: isEmail
*/
//login
router.post( '/',
[check('email','el email es obligatorio').isEmail(),
check('password','el password es obligatorio').not().isEmpty(),
validarCampos],
login);
//revalidar token
router.get( '/renew',validarJWT,renewToken);
module.exports = router;