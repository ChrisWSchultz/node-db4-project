exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('ingredient_types')
        .del()
        .then(function () {
            // Inserts seed entries
            return knex('ingredient_types').insert([
                {id: 1, name: "chopped"},
                {id: 2, name: "cubed"},
                {id: 3, name: "diced"},
                {id: 4, name: "minced"}
            ]);
        });
};
