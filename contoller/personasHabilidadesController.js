const ModelPersonasHabilidades = require('../models/PersonasHabilidades')

const createPeopleSkills = (req, res) => {
    ModelPersonasHabilidades.create(req.body)
        .then(row => {
            res.status(201).send({ message: 'Relación habilidad persona creada', data: row })
        })
        .catch(err => {
            res.status(400).send({ message: 'Error al crear habilidad de persona', err })
        })
}

const findAllPeopleSkills = (req, res) => {
    ModelPersonasHabilidades.findAll()
        .then(rows => {
            res.status(200).send(rows)
        })
        .catch(err => {
            res.status(400).send({ message: 'Error listing people skills', err })
        })
}

const findOnePeopleSkills = (req, res) => {
    ModelPersonasHabilidades.findOne(req.params.idPersonaHabilidad)
        .then(row => {
            res.status(200).send(row)
        })
        .catch(err => {
            res.status(400).send({ message: 'Error listing people skills', err })
        })
}

const updateOnePeopleSkills = (req, res) => {
    ModelPersonasHabilidades.update(req.params.idPersonaHabilidad, req.body)
        .then(row => {
            res.status(200).send({ message: 'People skills Updated', data: row })
        })
        .catch(err => {
            res.status(400).send({ message: 'Error updating people skills', err })
        })
}

const destroyOnePeopleSkills = (req, res) => {
    ModelPersonasHabilidades.destroy(req.params.idPersonaHabilidad)
        .then(row => {
            res.status(204).send()
        })
        .catch(err => {
            res.status(400).send({ message: 'Error destroying people skills', err })
        })
}

const softDeleteOnePeopleSkills = (req, res) => {
    ModelPersonasHabilidades.softDelete(req.params.idPersonaHabilidad)
        .then(row => {
            res.status(204).send()
        })
        .catch(err => {
            res.status(400).send({ message: 'Error deleting people skills', err })
        })
}

module.exports = {
    createPeopleSkills,
    findAllPeopleSkills,
    findOnePeopleSkills,
    updateOnePeopleSkills,
    destroyOnePeopleSkills,
    softDeleteOnePeopleSkills
}