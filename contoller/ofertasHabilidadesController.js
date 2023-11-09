const ModelOffersSkills = require('../models/Mensajes')

const createMessaje = (req, res) => {
    ModelOffersSkills.create(req.body)
        .then(row => {
            res.status(201).send({ message: 'Relación oferta habilidades creada', data: row })
        })
        .catch(err => {
            res.status(400).send({ message: 'Error al crear relacion oferta habilidades', err })
        })
}

const findAllMessaje = (req, res) => {
    ModelOffersSkills.findAll()
        .then(rows => {
            res.status(200).send(rows)
        })
        .catch(err => {
            res.status(400).send({ message: 'Error listing offers', err })
        })
}

const findOneMessaje = (req, res) => {
    ModelOffersSkills.findOne(req.params.idMesaje)
        .then(row => {
            res.status(200).send(row)
        })
        .catch(err => {
            res.status(400).send({ message: 'Error listing offers', err })
        })
}

const updateOneMessaje = (req, res) => {
    ModelOffersSkills.update(req.params.idMesaje, req.body)
        .then(row => {
            res.status(200).send({ message: 'Offers Updated', data: row })
        })
        .catch(err => {
            res.status(400).send({ message: 'Error updating offers', err })
        })
}

const destroyOneMessaje = (req, res) => {
    ModelOffersSkills.destroy(req.params.idMesaje)
        .then(row => {
            res.status(204).send()
        })
        .catch(err => {
            res.status(400).send({ message: 'Error destroying offers', err })
        })
}

const softDeleteOneMessaje = (req, res) => {
    ModelOffersSkills.softDelete(req.params.idMesaje)
        .then(row => {
            res.status(204).send()
        })
        .catch(err => {
            res.status(400).send({ message: 'Error deleting offers', err })
        })
}

module.exports = {
    createMessaje,
    findAllMessaje,
    findOneMessaje,
    updateOneMessaje,
    destroyOneMessaje,
    softDeleteOneMessaje
}