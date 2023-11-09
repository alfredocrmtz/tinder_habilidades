const knex = require('../config')

const create = (body) => {
    return knex
        .insert(body)
        .into('ofertas_habilidades')
        .returning('*')
}

const findAll = () => {
    return knex
        .select('*')
        .from('ofertas_habilidades')
        .where('disponible', true)
}

const findOne = (ofertaHabilidadId) => {
    return knex
        .select('*')
        .from('ofertas_habilidades')
        .where('oferta_habilidad_id', ofertaHabilidadId)
        .where('disponible', true)
}

const update = (ofertaHabilidadId, body) => {
    return knex
        .update(body)
        .from('ofertas_habilidades')
        .where('oferta_habilidad_id', ofertaHabilidadId)
        .returning('*')
}

const destroy = (ofertaHabilidadId) => {
    return knex
        .del()
        .from('ofertas_habilidades')
        .where('oferta_habilidad_id', ofertaHabilidadId)
}

const softDelete = (ofertaHabilidadId) => {
    return knex
        .update({ disponible: false })
        .from('ofertas_habilidades')
        .where('oferta_habilidad_id', ofertaHabilidadId)
}

module.exports = {
    create,
    findAll,
    findOne,
    update,
    destroy,
    softDelete
}