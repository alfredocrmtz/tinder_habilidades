const ModelEmpresas = require('../models/Empresas')

const createCompany = (req, res) => {
    ModelEmpresas.create(req.body)
        .then(row => {
            res.status(201).send({ message: 'Empresa creada', data: row })
        })
        .catch(err => {
            res.status(400).send({ message: 'Error al crear empresa', err })
        })
}

const findAllCompany = (req, res) => {
    ModelEmpresas.findAll()
        .then(rows => {
            res.status(200).send(rows)
        })
        .catch(err => {
            res.status(400).send({ message: 'Error listing company', err })
        })
}

const findOneCompany = (req, res) => {
    ModelEmpresas.findOne(req.params.idEmpresa)
        .then(row => {
            res.status(200).send(row)
        })
        .catch(err => {
            res.status(400).send({ message: 'Error listing company', err })
        })
}

const updateOneCompany = (req, res) => {
    ModelEmpresas.update(req.params.idEmpresa, req.body)
        .then(row => {
            res.status(200).send({ message: 'Company Updated', data: row })
        })
        .catch(err => {
            res.status(400).send({ message: 'Error updating company', err })
        })
}

const destroyOneCompany = (req, res) => {
    ModelEmpresas.destroy(req.params.idEmpresa)
        .then(row => {
            res.status(204).send()
        })
        .catch(err => {
            res.status(400).send({ message: 'Error destroying company', err })
        })
}

const softDeleteOneCompany = (req, res) => {
    ModelEmpresas.softDelete(req.params.idEmpresa)
        .then(row => {
            res.status(204).send()
        })
        .catch(err => {
            res.status(400).send({ message: 'Error deleting company', err })
        })
}

module.exports = {
    createCompany,
    findAllCompany,
    findOneCompany,
    updateOneCompany,
    destroyOneCompany,
    softDeleteOneCompany
}