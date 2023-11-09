/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.hasTable('percepcion_estimada').then(function (exists) {
        if (!exists) {
            return knex.schema.createTable('percepcion_estimada', function (table) {
                table.increments('percepcion_estimada_id').primary()
                table.float('cantidad').notNullable()
                table.string('modena').notNullable()
                table.string('simbolo_modena').notNullable()
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
    return knex.schema.hasTable('percepcion_estimada').then(function (exists) {
        if (exists) {
            return knex.schema.dropTable('percepcion_estimada')
        }
    })
};
