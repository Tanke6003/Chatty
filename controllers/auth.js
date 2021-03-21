const { response } = require('express');
const bcrypt       = require('bcryptjs')
const Usuario      = require('../models/usuario');
const { generarJWT } = require('../helpers/jwt');

const crearUsuario = async(req, res = response) => {

    try {
        
        const { email, password} = req.body;
        //verificar si existe el email
        const existeEmail = await Usuario.findOne({ email});
        if(existeEmail){
            return res.status(400).json({
                ok: false,
                msg:' el correo ya existe'
            });
        }      
        const usuario = new Usuario( req.body);
        //encirptado de contraseña
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync( password, salt);
        //guardar usuario en db
        await usuario.save();
        //generar jwt
        const token = await generarJWT(usuario.id);
        res.json({
            usuario,
            token
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg:'hable con el administrador'
        });
    }
}

const login = async(req, res = response) => {
    
    const {email,password} = req.body;
    try {
        //validar correo
        const usuariodb = await Usuario.findOne({ email });
        if(!usuariodb){
            return res.status(404).json({
                ok: false,
                msg: 'email no encontrado'
            });
        }
        //validar password
        const validarPassword = bcrypt.compareSync(password,usuariodb.password);
        if (!validarPassword){
            return res.status(400).json({
                ok: false,
                msg: 'la contraseña no es correcta'
            });
        }
        //generar token
        const token = await generarJWT(usuariodb.id);
        res.json({
            ok: true,
            usuario:usuariodb,
            token
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg:'hable con el administrador'
        });
    }
    
}

const renewToken = async(req, res = response) => {

    const uid = req.uid;

    //generar nuevo jwt
    
    const token = await generarJWT(uid);

    //obtener el usuario por uid
    const usuario = await Usuario.findById(uid);


    res.json({
        ok: true,
        token,
        usuario
    });
}
module.exports = {crearUsuario,login,renewToken }