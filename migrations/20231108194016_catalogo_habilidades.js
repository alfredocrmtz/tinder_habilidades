/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.hasTable('catalogo_habilidades').then(function (exists) {
        if (!exists) {
            return knex.schema.createTable('catalogo_habilidades', function (table) {
                table.increments('habilidad_id').primary()
                table.string('habilidad').notNullable().unique()
                table.string('descripcion').notNullable()
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
    return knex.schema.hasTable('catalogo_habilidades').then(function (exists) {
        if (exists) {
            return knex.schema.dropTable('catalogo_habilidades')
        }
    })
};
