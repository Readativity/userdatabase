exports.up = function (knex, Promise) {
  return knex.schema.createTable("activity", table => {
    table.increments("id").primary();
    table.text("interest");
    table.text("articleURL");
    table.text("headline");
    table.text("image");
    table.integer("timeReading");
    table.text("date");
    table.integer("_userId").references("userinformation.id").onDelete("CASCADE");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists("activity");
};
