exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('ingredients')
        .del()
        .then(function () {
            // Inserts seed entries
            return knex('ingredients').insert([
                {id: 1, name: "milk", form_id: 2},
                {id: 2, name: "flour", form_id: 1},
                {id: 3, name: "apple", form_id: 3},
                {id: 4, name: "dirt", form_id: 1}
            ]);
        });
};
