/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.hasTable('ofertas_habilidades').then(function (exists) {
        if (!exists) {
            return knex.schema.createTable('ofertas_habilidades', function (table) {
                table.increments('oferta_habilidad_id').primary()
                table.integer('oferta_id').unsigned().references('ofertas.oferta_id')
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
    return knex.schema.hasTable('ofertas_habilidades').then(function (exists) {
        if (exists) {
            return knex.schema.dropTable('ofertas_habilidades')
        }
    })
};
