/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.hasTable('empresas').then(function (exists) {
        if (!exists) {
            return knex.schema.createTable('empresas', function (table) {
                table.increments('empresa_id').primary()
                table.string('nombre_empresa').notNullable().unique()
                table.string('giro_empresa').notNullable()
                table.string('contacto').notNullable()
                table.string('direccion').notNullable()
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
    return knex.schema.hasTable('empresas').then(function (exists) {
        if (exists) {
            return knex.schema.dropTable('empresas')
        }
    })
};
