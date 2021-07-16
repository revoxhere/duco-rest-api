const { query } = require('express-validator');

module.exports = [
    query('per_page').isInt({min: 5, max: 50}),
    query('page').isInt({min: 1, max: 999999999})
]