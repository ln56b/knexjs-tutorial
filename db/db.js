const knex = requier("knex")
const knexfile = require("./knexfile")

const db = knex(knexfile.development)
module.exports(db)
