var express = require ('express');
var router = express.Router();

var usuario = require('../models/usuarios');

//crear usuario

router.post('/',(req,res)=>{
    let u = new usuario({
        nombre : req.body.nombre,
        apellido : req.body.apellido,
        fechaNacimiento : {
            dia: req.body.dia,
            mes: req.body.mes,
            anio: req.body.anio,
        }
    });

    u.save()
    .then( result => {
        res.send(result);
        res.end();
    })
    .catch( error => {
        res.send(error);
        res.end();
    })

    //usuarios.push(usuario);
    /////res.send({mensaje: 'registro guardado', usuarioGuardado: usuario});
    //req.body.nombre;
});

//obtener usuario

router.get('/:id', (req , res)=>{
    /*res.send(usuarios[req.params.id]);*/
    usuario.find({_id:req.params.id})
    .then(result => {
        res.send(result[0]);
        res.end();
    })
    .catch (error => {
        res.send(error);
        res.end();
    });
});


//obtener todo los usuarios

router.get('/', (req, res)=>{
    
    usuario.find()
    .then(result => {
        res.send(result);
        res.end();
    })
    .catch (error => {
        res.send(error);
        res.end();
    });
});

//actualizar un usuario

router.put('/:id' , (req, res) => {
    
    usuario.update(
        {_id:req.params.id},
        {
            nombre : req.body.nombre,
            apellido : req.body.apellido,
            fechaNacimiento : {
                dia: req.body.dia,
                mes: req.body.mes,
                anio: req.body.anio,
            }
        }
    ).then (result => { 
        res.send(result);
        res.end();
    })
    .catch ( error => { 
        res.send(error);
        res.end();
    }) 
});


//borrar un usuario
router.delete('/:id' , (req, res) => {

    usuario.remove(
        {
            _id: req.params.id
        }
    ).then (result => { 
        res.send(result);
        res.end();
    })
    .catch ( error => { 
        res.send(error);
        res.end();
    }) 
});


module.exports = router;