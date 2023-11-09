/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.hasTable('ofertas').then(function (exists) {
        if (!exists) {
            return knex.schema.createTable('ofertas', function (table) {
                table.increments('oferta_id').primary()
                table.string('descipcion').notNullable()
                table.integer('empresa_id').unsigned().references('empresas.empresa_id')
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
    return knex.schema.hasTable('ofertas').then(function (exists) {
        if (exists) {
            return knex.schema.dropTable('ofertas')
        }
    })
};
