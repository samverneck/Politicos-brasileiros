'use strict';

const AtomName = 'DataRegistroDefinitivo';

module.exports = {
  type: Date
, validate: require('./../hadrons/ValidateMongoose')('is'+AtomName)
}