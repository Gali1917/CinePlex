const express = require('express');

//importacion del modelo
const peliculaSchema = require('../models/peliculaModel');

//enrutador
const router = express.Router();

//Crear Pelicula
// router.post('/peliculas/nueva_pelicula', (req, res) =>{
//     const pelicula = peliculaSchema(req.body);
//     pelicula
//     .save()
//     .then((data) =>{
//         res.json(data)
//     })
//     .catch((error) =>{
//         res.json({message: error})
//     });
// });

//Crear
router.post('/peliculas/nueva_pelicula', (req, res) =>{
    const nuevaPelicula = peliculaSchema({
        // id: uniquid(),
        nombre: req.body.nombre,
        tarifa: req.body.tarifa,
        hora_inicio: req.body.hora_inicio,
        idioma: req.body.idioma,
        tipo: req.body.tipo,
        categoria: req.body.categoria,
        restriccion: req.body.restriccion,
        imagen: req.body.imagen,
        trailer: req.body.trailer,
        sinopsis: req.body.sinopsis,
        portada: req.body.portada
    })
    nuevaPelicula.save(function(err){
        if(!err){
            res.send('Pelicula agregada correctamente')
        }
        else{
            res.send(err)
        }
        })
    })


//Listar Peliculas
router.get('/peliculas', (req, res) =>{
    peliculaSchema
    .find()
    .then((data) =>{
        res.json(data)
    })
    .catch((error) =>{
        res.json({message: error})
    });
});

//Listar Pelicula por ID
router.get('/peliculas/:id', (req, res) =>{
    const {id} = req.params;
    peliculaSchema
    .findById(id)
    .then((data) =>{
        res.json(data)
    })
    .catch((error) =>{
        res.json({message: error})
    });
});

//Obtener Datos
router.post('/peliculas/obtener_datos', (req, res) =>{
    peliculaSchema.find({id:req.body.id}, function(data, err){
        if(!err){
            res.send(data)
        }
        else{
            res.send(err)
        }
    })
})

//Editar Pelicula
router.put('/peliculas/:id', (req, res) =>{
    const {id} = req.params;
    const {nombre, tarifa, hora_inicio, idioma, tipo, categoria, restriccion, imagen, trailer, sinopsis, portada} = req.body;
    peliculaSchema
    .updateOne({_id: id}, {$set: {nombre, tarifa, hora_inicio, idioma, tipo, categoria, restriccion, imagen, trailer, sinopsis, portada}})
    .then((data) =>{
        res.json(data)
    })
    .catch((error) =>{
        res.json({message: error})
    });
});

//Eliminar Pelicula
router.delete('/peliculas/:id', (req, res) =>{
    const {id} = req.params;
    peliculaSchema
    .remove({_id: id})
    .then((data) =>{
        res.json(data)
    })
    .catch((error) =>{
        res.json({message: error})
    });
});
module.exports = router;