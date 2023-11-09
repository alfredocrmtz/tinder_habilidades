const ModelPercepcionEstimada = require('../models/PersonasHabilidades')

const createEstimatedPerception = (req, res) => {
    ModelPercepcionEstimada.create(req.body)
        .then(row => {
            res.status(201).send({ message: 'Estimación de percepción creada', data: row })
        })
        .catch(err => {
            res.status(400).send({ message: 'Error al crear estimación de percepcion', err })
        })
}

const findAllEstimatedPerception = (req, res) => {
    ModelPercepcionEstimada.findAll()
        .then(rows => {
            res.status(200).send(rows)
        })
        .catch(err => {
            res.status(400).send({ message: 'Error listing estimated perception', err })
        })
}

const findOneEstimatedPerception = (req, res) => {
    ModelPercepcionEstimada.findOne(req.params.idPercepcionEstimada)
        .then(row => {
            res.status(200).send(row)
        })
        .catch(err => {
            res.status(400).send({ message: 'Error listing estimated perception', err })
        })
}

const updateOneEstimatedPerception = (req, res) => {
    ModelPercepcionEstimada.update(req.params.idPercepcionEstimada, req.body)
        .then(row => {
            res.status(200).send({ message: 'Estimated perception Updated', data: row })
        })
        .catch(err => {
            res.status(400).send({ message: 'Error updating estimated perception', err })
        })
}

const destroyOneEstimatedPerception = (req, res) => {
    ModelPercepcionEstimada.destroy(req.params.idPercepcionEstimada)
        .then(row => {
            res.status(204).send()
        })
        .catch(err => {
            res.status(400).send({ message: 'Error destroying estimated perception', err })
        })
}

const softDeleteOneEstimatedPerception = (req, res) => {
    ModelPercepcionEstimada.softDelete(req.params.idPercepcionEstimada)
        .then(row => {
            res.status(204).send()
        })
        .catch(err => {
            res.status(400).send({ message: 'Error deleting estimated perception', err })
        })
}

module.exports = {
    createEstimatedPerception,
    findAllEstimatedPerception,
    findOneEstimatedPerception,
    updateOneEstimatedPerception,
    destroyOneEstimatedPerception,
    softDeleteOneEstimatedPerception
}