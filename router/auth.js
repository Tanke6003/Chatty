/*
 path: api/login
*/
const{ Router } = require('express');
const { check } = require('express-validator');
const { crearUsuario, login, renewToken } = require('../controllers/auth');
const router = Router();
//crear nuevos usuarios
router.post( '/new',crearUsuario);
//login
router.post( '/',
[check('email','el email es obligatorio').isEmail(),
check('password','el password es obligatorio').not().isEmpty()],
login);
//revalidar token
router.get( '/renew',renewToken);
module.exports = router;