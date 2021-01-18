exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('recipes')
        .del()
        .then(function () {
            // Inserts seed entries
            return knex('recipes').insert([
                {id: 1, title: "Cup of Milk", description: "This is a cup of milk."},
                {id: 2, title: "Cup of Dirt", description: "Can I go now?"}
            ]);
        });
};
