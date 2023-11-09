const ModelMessaje = require('../models/Mensajes')

const createMessaje = (req, res) => {
    ModelMessaje.create(req.body)
        .then(row => {
            res.status(201).send({ message: 'Estimación de oferta', data: row })
        })
        .catch(err => {
            res.status(400).send({ message: 'Error al crear oferta', err })
        })
}

const findAllMessaje = (req, res) => {
    ModelMessaje.findAll()
        .then(rows => {
            res.status(200).send(rows)
        })
        .catch(err => {
            res.status(400).send({ message: 'Error listing offers', err })
        })
}

const findOneMessaje = (req, res) => {
    ModelMessaje.findOne(req.params.idMesaje)
        .then(row => {
            res.status(200).send(row)
        })
        .catch(err => {
            res.status(400).send({ message: 'Error listing offers', err })
        })
}

const updateOneMessaje = (req, res) => {
    ModelMessaje.update(req.params.idMesaje, req.body)
        .then(row => {
            res.status(200).send({ message: 'Offers Updated', data: row })
        })
        .catch(err => {
            res.status(400).send({ message: 'Error updating offers', err })
        })
}

const destroyOneMessaje = (req, res) => {
    ModelMessaje.destroy(req.params.idMesaje)
        .then(row => {
            res.status(204).send()
        })
        .catch(err => {
            res.status(400).send({ message: 'Error destroying offers', err })
        })
}

const softDeleteOneMessaje = (req, res) => {
    ModelMessaje.softDelete(req.params.idMesaje)
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