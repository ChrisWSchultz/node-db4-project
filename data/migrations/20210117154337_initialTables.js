
exports.up = function(knex) {
    return knex.schema
        .createTable('recipes', (table) => {
            table.increments('id');
            table.text('title')
                .notNullable();
            table.text('description');
        })
        .createTable('instructions', (table) => {
            table.increments('id');
            table.integer('step')
                .notNullable();
            table.text('title')
                .notNullable();
            table.text('description')
                .notNullable();
            table.integer('recipe_id')
                .notNullable()
                .references('id')
                .inTable('recipes')
                .onUpdate('CASCADES')
                .onDelete('CASCADES');
        })
        .createTable('ingredient_types', (table) => {
            // chopped, diced, minced, frozen, dried, canned, fresh, boneless, etc.
            table.increments();
            table.text('name')
                .notNullable();
        })
        .createTable('ingredient_form', (table) => {
            // solid, liquid, discrete
            table.increments();
            table.text('name')
                .notNullable();
            table.boolean('liquid')
                .notNullable()
                .defaultTo(false);
        })
        .createTable('ingredients', (table) => {
            table.increments('id');
            table.text('name')
                .notNullable();
            table.integer('form_id')
                .notNullable()
                .references('id')
                .inTable('ingredient_form')
                .onUpdate('RESTRICT')
                .onDelete('RESTRICT');
            table.integer('type_id')
                .references('id')
                .inTable('ingredient_types')
                .onUpdate('RESTRICT')
                .onDelete('RESTRICT');
        })
        .createTable('recipe_ingredient_rel', (table) => {
            table.integer('recipe_id')
                .notNullable()
                .references('id')
                .inTable('recipes')
                .onDelete('CASCADES')
                .onDelete('CASCADES');
            table.integer('ingredient_id')
                .notNullable()
                .references('id')
                .inTable('ingredients')
                .onDelete('CASCADES')
                .onDelete('CASCADES');
            table.float('quantity')
                .notNullable();
        })


};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('recipes')
        .dropTableIfExists('instructions')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('ingredient_types')
        .dropTableIfExists('ingredient_form')
        .dropTableIfExists('recipe_ingredient_rel');
};
