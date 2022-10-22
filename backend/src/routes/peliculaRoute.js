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
        sinopsis: req.body.sinopsis
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

//Editar Pelicula
router.put('/peliculas/:id', (req, res) =>{
    const {id} = req.params;
    const {nombre, tarifa, hora_inicio, idioma, tipo, categoria, restriccion, imagen} = req.body;
    peliculaSchema
    .updateOne({_id: id}, {$set: {nombre, tarifa, hora_inicio, idioma, tipo, categoria, restriccion, imagen}})
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