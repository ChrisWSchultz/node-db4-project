exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('recipe_ingredient_rel')
        .del()
        .then(function () {
            // Inserts seed entries
            return knex('recipe_ingredient_rel').insert([
                {recipe_id: 1, ingredient_id: 1, quantity: 1.00},
                {recipe_id: 2, ingredient_id: 4, quantity: 5.00}
            ]);
        });
};
