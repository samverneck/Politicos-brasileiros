'use strict';

const AtomName = 'Sigla';

module.exports = {
  type: String
, validate: require('./../hadrons/ValidateMongoose')('is'+AtomName)
, required: true
}