const knex = require('../config')

const create = (body) => {
    return knex
        .insert(body)
        .into('pagos_honorarios')
        .returning('*')
}

const findAll = () => {
    return knex
        .select('*')
        .from('pagos_honorarios')
        .where('disponible', true)
}

const findOne = (pagoHorarioId) => {
    return knex
        .select('*')
        .from('pagos_honorarios')
        .where('pago_honorario_id', pagoHorarioId)
        .where('disponible', true)
}

const update = (pagoHorarioId, body) => {
    return knex
        .update(body)
        .from('pagos_honorarios')
        .where('pago_honorario_id', pagoHorarioId)
        .returning('*')
}

const destroy = (pagoHorarioId) => {
    return knex
        .del()
        .from('pagos_honorarios')
        .where('pago_honorario_id', pagoHorarioId)
}

const softDelete = (pagoHorarioId) => {
    return knex
        .update({ disponible: false })
        .from('pagos_honorarios')
        .where('pago_honorario_id', pagoHorarioId)
}

module.exports = {
    create,
    findAll,
    findOne,
    update,
    destroy,
    softDelete
}