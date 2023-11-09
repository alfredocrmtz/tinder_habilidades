const ModelHabilidades = require('../models/CatalogoHabilidades')

const createSkills = (req, res) => {
    ModelHabilidades.create(req.body)
        .then(row => {
            res.status(201).send({ message: 'Habilidad creada', data: row })
        })
        .catch(err => {
            res.status(400).send({ message: 'Error al crear habilidad', err })
        })
}

const findAllSkills = (req, res) => {
    ModelHabilidades.findAll()
        .then(rows => {
            res.status(200).send(rows)
        })
        .catch(err => {
            res.status(400).send({ message: 'Error listing skills', err })
        })
}

const findOneSkills = (req, res) => {
    ModelHabilidades.findOne(req.params.idHabilidad)
        .then(row => {
            res.status(200).send(row)
        })
        .catch(err => {
            res.status(400).send({ message: 'Error listing skills', err })
        })
}

const updateOneSkills = (req, res) => {
    ModelHabilidades.update(req.params.idHabilidad, req.body)
        .then(row => {
            res.status(200).send({ message: 'Skills Updated', data: row })
        })
        .catch(err => {
            res.status(400).send({ message: 'Error updating skills', err })
        })
}

const destroyOneSkills = (req, res) => {
    ModelHabilidades.destroy(req.params.idHabilidad)
        .then(row => {
            res.status(204).send()
        })
        .catch(err => {
            res.status(400).send({ message: 'Error destroying skills', err })
        })
}

const softDeleteOneSkills = (req, res) => {
    ModelHabilidades.softDelete(req.params.idHabilidad)
        .then(row => {
            res.status(204).send()
        })
        .catch(err => {
            res.status(400).send({ message: 'Error deleting skills', err })
        })
}

module.exports = {
    createSkills,
    findAllSkills,
    findOneSkills,
    updateOneSkills,
    destroyOneSkills,
    softDeleteOneSkills
}