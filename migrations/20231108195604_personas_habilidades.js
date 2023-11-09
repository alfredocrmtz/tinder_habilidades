/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.hasTable('personas_habilidades').then(function (exists) {
        if (!exists) {
            return knex.schema.createTable('personas_habilidades', function (table) {
                table.increments('persona_habilidad_id').primary()
                table.integer('persona_id').unsigned().references('personas.persona_id')
                table.integer('habilidad_id').unsigned().references('catalogo_habilidades.habilidad_id')
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
    return knex.schema.hasTable('personas_habilidades').then(function (exists) {
        if (exists) {
            return knex.schema.dropTable('personas_habilidades')
        }
    })
};
