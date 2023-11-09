/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.hasTable('servicios_contratados').then(function (exists) {
        if (!exists) {
            return knex.schema.createTable('servicios_contratados', function (table) {
                table.increments('servicio_contratado_id').primary()
                table.float('honorarios').notNullable()
                table.float('adelanto').notNullable()
                table.string('modena').notNullable()
                table.integer('oferta_id').unsigned().references('ofertas.oferta_id')
                table.integer('persona_id').unsigned().references('personas.persona_id')
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
    return knex.schema.hasTable('servicios_contratados').then(function (exists) {
        if (exists) {
            return knex.schema.dropTable('servicios_contratados')
        }
    })
};
