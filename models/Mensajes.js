const knex = require('../config')

const create = (body) => {
    return knex
        .insert(body)
        .into('mensajes')
        .returning('*')
}

const findAll = () => {
    return knex
        .select('*')
        .from('mensajes')
        .where('disponible', true)
}

const findOne = (mensajeId) => {
    return knex
        .select('*')
        .from('mensajes')
        .where('mensaje_id', mensajeId)
        .where('disponible', true)
}

const update = (mensajeId, body) => {
    return knex
        .update(body)
        .from('mensajes')
        .where('mensaje_id', mensajeId)
        .returning('*')
}

const destroy = (mensajeId) => {
    return knex
        .del()
        .from('mensajes')
        .where('mensaje_id', mensajeId)
}

const softDelete = (mensajeId) => {
    return knex
        .update({ disponible: false })
        .from('mensajes')
        .where('mensaje_id', mensajeId)
}

module.exports = {
    create,
    findAll,
    findOne,
    update,
    destroy,
    softDelete
}