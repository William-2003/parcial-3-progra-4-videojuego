const express = require('express')
const rankingSchema = require('../models/rankingmodel')
const router = express.Router()


//guardar datos
router.post('/ranking',(req,res)=>{
    const ranking = rankingSchema(req.body)
    ranking
        .save()
        .then((data)=> res.json(data))
        .catch((error)=> res.json({message:error}))
})

//traer todos los datos
router.get('/ranking',(req,res)=>{
    rankingSchema
        .find()
        .then((data)=> res.json(data))
        .catch((error)=> res.json({message:error}))
})


// traer dato por id
router.get('/ranking/:id',(req,res)=>{
    const{id}= req.params
    rankingSchema
        .findById(id)
        .then((data)=> res.json(data))
        .catch((error)=> res.json({message:error}))
})

//actualisar datos de un usuario
router.put('/ranking/:id',(req,res)=>{
    const{id}= req.params
    const{nickname,n_muertes,n_disparo_magia,n_disparo_arma,tiempo} = req.body
    rankingSchema
        .updateOne(
            {_id:id},
            { $set: {nickname,n_muertes,n_disparo_magia,n_disparo_arma,tiempo}})
        .then((data)=> res.json(data))
        .catch((error)=> res.json({message:error}))
})

//delete datos por id
router.delete('/ranking/:id',(req,res)=>{
    const{id}= req.params

    rankingSchema
        .remove({_id:id})
        .then((data)=> res.json(data))
        .catch((error)=> res.json({message:error}))
})


module.exports = router