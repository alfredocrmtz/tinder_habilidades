const knex = require('../config')

const create = (body) => {
    return knex
        .insert(body)
        .into('servicios_contratados')
        .returning('*')
}

const findAll = () => {
    return knex
        .select('*')
        .from('servicios_contratados')
        .where('disponible', true)
}

const findOne = (servicioContratadoId) => {
    return knex
        .select('*')
        .from('servicios_contratados')
        .where('servicio_contratado_id', servicioContratadoId)
        .where('disponible', true)
}

const update = (servicioContratadoId, body) => {
    return knex
        .update(body)
        .from('servicios_contratados')
        .where('servicio_contratado_id', servicioContratadoId)
        .returning('*')
}

const destroy = (servicioContratadoId) => {
    return knex
        .del()
        .from('servicios_contratados')
        .where('servicio_contratado_id', servicioContratadoId)
}

const softDelete = (servicioContratadoId) => {
    return knex
        .update({ disponible: false })
        .from('servicios_contratados')
        .where('servicio_contratado_id', servicioContratadoId)
}

module.exports = {
    create,
    findAll,
    findOne,
    update,
    destroy,
    softDelete
}