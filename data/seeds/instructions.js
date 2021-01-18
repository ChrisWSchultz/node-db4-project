exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('instructions')
        .del()
        .then(function () {
            // Inserts seed entries
            return knex('instructions').insert([
                {id: 1, step:1, title:"Step One", description: "Get Cup.", recipe_id: 1},
                {id: 2, step:2, title:"Step Two", description: "Put Milk into cup.", recipe_id: 1},
                {id: 3, step:1, title:"Step One", description: "Get Cup.", recipe_id: 2},
                {id: 4, step:2, title:"Step Two", description: "Get Dirt.", recipe_id: 2},
                {id: 5, step:3, title:"Step Three", description: "Put dirt into cup.", recipe_id: 2},
            ]);
        });
};
