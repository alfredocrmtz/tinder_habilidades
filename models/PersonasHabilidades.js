const knex = require('../config')

const create = (body) => {
    return knex
        .insert(body)
        .into('personas_habilidades')
        .returning('*')
}

const findAll = () => {
    return knex
        .select('*')
        .from('personas_habilidades')
        .where('disponible', true)
}

const findOne = (personaHabilidadId) => {
    return knex
        .select('*')
        .from('personas_habilidades')
        .where('persona_habilidad_id', personaHabilidadId)
        .where('disponible', true)
}

const update = (personaHabilidadId, body) => {
    return knex
        .update(body)
        .from('personas_habilidades')
        .where('persona_habilidad_id', personaHabilidadId)
        .returning('*')
}

const destroy = (personaHabilidadId) => {
    return knex
        .del()
        .from('personas_habilidades')
        .where('persona_habilidad_id', personaHabilidadId)
}

const softDelete = (personaHabilidadId) => {
    return knex
        .update({ disponible: false })
        .from('personas_habilidades')
        .where('persona_habilidad_id', personaHabilidadId)
}

module.exports = {
    create,
    findAll,
    findOne,
    update,
    destroy,
    softDelete
}