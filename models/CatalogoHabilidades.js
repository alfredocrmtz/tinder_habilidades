const knex = require('../config')

const create = (body) => {
    return knex
        .insert(body)
        .into('catalogo_habilidades')
        .returning('*')
}

const findAll = () => {
    return knex
        .select('*')
        .from('catalogo_habilidades')
        .where('disponible', true)
}

const findOne = (habilidadId) => {
    return knex
        .select('*')
        .from('catalogo_habilidades')
        .where('habilidad_id', habilidadId)
        .where('disponible', true)
}

const update = (habilidadId, body) => {
    return knex
        .update(body)
        .from('catalogo_habilidades')
        .where('habilidad_id', habilidadId)
        .returning('*')
}

const destroy = (habilidadId) => {
    return knex
        .del()
        .from('catalogo_habilidades')
        .where('habilidad_id', habilidadId)
}

const softDelete = (habilidadId) => {
    return knex
        .update({ disponible: false })
        .from('catalogo_habilidades')
        .where('habilidad_id', habilidadId)
}

module.exports = {
    create,
    findAll,
    findOne,
    update,
    destroy,
    softDelete
}