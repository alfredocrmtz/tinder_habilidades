const ModelPersona = require('../models/Personas')

const createPeople = (req, res) => {
    ModelPersona.create(req.body)
        .then(row => {
            res.status(201).send({ message: 'Persona creada', data: row })
        })
        .catch(err => {
            res.status(400).send({ message: 'Error al crear persona', err })
        })
}

const findAllPeople = (req, res) => {
    ModelPersona.findAll()
        .then(rows => {
            res.status(200).send(rows)
        })
        .catch(err => {
            res.status(400).send({ message: 'Error listing people', err })
        })
}

const findOnePeople = (req, res) => {
    ModelPersona.findOne(req.params.idPersona)
        .then(row => {
            res.status(200).send(row)
        })
        .catch(err => {
            res.status(400).send({ message: 'Error listing people', err })
        })
}

const updateOnePeople = (req, res) => {
    ModelPersona.update(req.params.idPersona, req.body)
        .then(row => {
            res.status(200).send({ message: 'People Updated', data: row })
        })
        .catch(err => {
            res.status(400).send({ message: 'Error updating people', err })
        })
}

const destroyOnePeople = (req, res) => {
    ModelPersona.destroy(req.params.idPersona)
        .then(row => {
            res.status(204).send()
        })
        .catch(err => {
            res.status(400).send({ message: 'Error destroying people', err })
        })
}

const softDeleteOnePeople = (req, res) => {
    ModelPersona.softDelete(req.params.idPersona)
        .then(row => {
            res.status(204).send()
        })
        .catch(err => {
            res.status(400).send({ message: 'Error deleting people', err })
        })
}

module.exports = {
    createPeople,
    findAllPeople,
    findOnePeople,
    updateOnePeople,
    destroyOnePeople,
    softDeleteOnePeople
}