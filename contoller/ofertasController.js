const ModelOfertas = require('../models/Ofertas')

const createOffers = (req, res) => {
    ModelOfertas.create(req.body)
        .then(row => {
            res.status(201).send({ message: 'Estimación de oferta', data: row })
        })
        .catch(err => {
            res.status(400).send({ message: 'Error al crear oferta', err })
        })
}

const findAllOffers = (req, res) => {
    ModelOfertas.findAll()
        .then(rows => {
            res.status(200).send(rows)
        })
        .catch(err => {
            res.status(400).send({ message: 'Error listing offers', err })
        })
}

const findOneOffers = (req, res) => {
    ModelOfertas.findOne(req.params.idOferta)
        .then(row => {
            res.status(200).send(row)
        })
        .catch(err => {
            res.status(400).send({ message: 'Error listing offers', err })
        })
}

const updateOneOffers = (req, res) => {
    ModelOfertas.update(req.params.idOferta, req.body)
        .then(row => {
            res.status(200).send({ message: 'Offers Updated', data: row })
        })
        .catch(err => {
            res.status(400).send({ message: 'Error updating offers', err })
        })
}

const destroyOneOffers = (req, res) => {
    ModelOfertas.destroy(req.params.idOferta)
        .then(row => {
            res.status(204).send()
        })
        .catch(err => {
            res.status(400).send({ message: 'Error destroying offers', err })
        })
}

const softDeleteOneOffers = (req, res) => {
    ModelOfertas.softDelete(req.params.idOferta)
        .then(row => {
            res.status(204).send()
        })
        .catch(err => {
            res.status(400).send({ message: 'Error deleting offers', err })
        })
}

module.exports = {
    createOffers,
    findAllOffers,
    findOneOffers,
    updateOneOffers,
    destroyOneOffers,
    softDeleteOneOffers
}