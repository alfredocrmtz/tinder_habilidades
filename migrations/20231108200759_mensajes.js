/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.hasTable('mensajes').then(function (exists) {
        if (!exists) {
            return knex.schema.createTable('mensajes', function (table) {
                table.increments('mensaje_id').primary()
                table.string('titulo').notNullable()
                table.string('mensaje').notNullable()
                table.integer('empresa_id').unsigned().references('empresas.empresa_id')
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
    return knex.schema.hasTable('mensajes').then(function (exists) {
        if (exists) {
            return knex.schema.dropTable('mensajes')
        }
    })
};
