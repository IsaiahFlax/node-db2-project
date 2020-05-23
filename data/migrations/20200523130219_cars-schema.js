
exports.up = function(knex) {
  //vin, make, model, mileage are required
  //transmission and title are optional
  return knex.schema.createTable('cars', tbl => {
      tbl.increments('id')
      tbl.string('vin', 128).unique().notNullable()
      tbl.string('make', 128).notNullable()
      tbl.string('model', 128).notNullable()
      tbl.string('mileage', 128).notNullable()
      tbl.string('transmission', 128)
      tbl.string('title', 128)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExisits('cars')
};
