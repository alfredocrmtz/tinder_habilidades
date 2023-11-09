const knex = require('../config')

const create = (body) => {
    return knex
        .insert(body)
        .into('personas')
        .returning('*')
}

const findAll = () => {
    return knex
        .select('*')
        .from('personas')
        .where('disponible', true)
}

const findOne = (personaId) => {
    return knex
        .select('*')
        .from('personas')
        .where('persona_id', personaId)
        .where('disponible', true)
}

const update = (personaId, body) => {
    return knex
        .update(body)
        .from('personas')
        .where('persona_id', personaId)
        .returning('*')
}

const destroy = (personaId) => {
    return knex
        .del()
        .from('personas')
        .where('persona_id', personaId)
}

const softDelete = (personaId) => {
    return knex
        .update({ disponible: false })
        .from('personas')
        .where('persona_id', personaId)
}

module.exports = {
    create,
    findAll,
    findOne,
    update,
    destroy,
    softDelete
}