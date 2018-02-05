exports.up = function(knex, Promise) {
  return knex.schema.createTable('userinformation', table => {
    table.increments('id').primary();
    table.text('username');
    table.text('password');
    table.text('name');
    table.text('email');
    table.text('firstInterest');
    table.text('secondInterest');
    table.text('thirdInterest');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('userinformation');
};
