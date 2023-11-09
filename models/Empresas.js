const knex = require('../config')

const create = (body) => {
    return knex
        .insert(body)
        .into('empresas')
        .returning('*')
}

const findAll = () => {
    return knex
        .select('*')
        .from('empresas')
        .where('disponible', true)
}

const findOne = (empresaId) => {
    return knex
        .select('*')
        .from('empresas')
        .where('empresa_id', empresaId)
        .where('disponible', true)
}

const update = (empresaId, body) => {
    return knex
        .update(body)
        .from('empresas')
        .where('empresa_id', empresaId)
        .returning('*')
}

const destroy = (empresaId) => {
    return knex
        .del()
        .from('empresas')
        .where('empresa_id', empresaId)
}

const softDelete = (empresaId) => {
    return knex
        .update({ disponible: false })
        .from('empresas')
        .where('empresa_id', empresaId)
}

module.exports = {
    create,
    findAll,
    findOne,
    update,
    destroy,
    softDelete
}