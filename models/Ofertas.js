const knex = require('../config')

const create = (body) => {
    return knex
        .insert(body)
        .into('ofertas')
        .returning('*')
}

const findAll = () => {
    return knex
        .select('*')
        .from('ofertas')
        .where('disponible', true)
}

const findOne = (ofertaId) => {
    return knex
        .select('*')
        .from('ofertas')
        .where('oferta_id', ofertaId)
        .where('disponible', true)
}

const update = (ofertaId, body) => {
    return knex
        .update(body)
        .from('ofertas')
        .where('oferta_id', ofertaId)
        .returning('*')
}

const destroy = (ofertaId) => {
    return knex
        .del()
        .from('ofertas')
        .where('oferta_id', ofertaId)
}

const softDelete = (ofertaId) => {
    return knex
        .update({ disponible: false })
        .from('ofertas')
        .where('oferta_id', ofertaId)
}

module.exports = {
    create,
    findAll,
    findOne,
    update,
    destroy,
    softDelete
}