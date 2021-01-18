exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('ingredient_forms')
        .del()
        .then(function () {
            // Inserts seed entries
            return knex('ingredient_forms').insert([
                {id: 1, name: "solid", liquid: false},
                {id: 2, name: "liquid", liquid: true},
                {id: 3, name: "discrete", liquid: false}
            ]);
        });
};
