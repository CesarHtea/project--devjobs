
exports.up = function(knex, Promise) {
  return knex
    .schema
    .createTable('jobs', function(t) {
      t.increments();
      t.string('title');
      t.string('description');
      t.string('location');
      t.integer('salary');
      t.boolean('fullTime');
      t.string('companyId');
    });  
};

exports.down = function(knex, Promise) {
  return knex
    .schema
    .dropTableIfExists('jobs');  
};
