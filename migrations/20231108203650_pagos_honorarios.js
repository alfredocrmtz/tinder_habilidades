/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.hasTable('pagos_honorarios').then(function (exists) {
        if (!exists) {
            return knex.schema.createTable('pagos_honorarios', function (table) {
                table.increments('pago_honorario_id').primary()
                table.float('cantidad_pagada').notNullable()
                table.integer('tipo_pago').notNullable().comment("valor 1, adelanto; valor 2, pago final")
                table.string('modena').notNullable()
                table.string('comprobante').notNullable()
                table.integer('empresa_id').unsigned().references('empresas.empresa_id')
                table.integer('persona_id').unsigned().references('personas.persona_id')
                table.integer('servicio_contratado_id').unsigned().references('servicios_contratados.servicio_contratado_id')
                table.boolean('disponible').notNullable().defaultTo(true)
                table.timestamp('registrada').defaultTo(knex.fn.now())
            })
        }
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.hasTable('pagos_honorarios').then(function (exists) {
        if (exists) {
            return knex.schema.dropTable('pagos_honorarios')
        }
    })
};
