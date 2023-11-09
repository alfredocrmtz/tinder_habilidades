/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.hasTable('personas').then(function (exists) {
        if (!exists) {
            return knex.schema.createTable('personas', function (table) {
                table.increments('persona_id').primary()
                table.string('nombre').notNullable()
                table.string('primer_apellido').notNullable()
                table.string('segundo_apellido')
                table.string('rfc').notNullable().unique()
                table.string('telefono').notNullable().unique()
                table.string('correo').notNullable().unique()
                table.string('semblanza')
                table.boolean('disponible').notNullable().defaultTo(true)
                table.timestamp('registrado').defaultTo(knex.fn.now())
            })
        }
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.hasTable('personas').then(function (exists) {
        if (exists) {
            return knex.schema.dropTable('personas')
        }
    })
};
