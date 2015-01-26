var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , userSchema = require('./user')
  , locationSchema = require('./location')
  , schemaComposto
  , User
  ;

// Adiciono o schema da localização no schema do usuário
userSchema.location = locationSchema;

schemaComposto = new Schema(userSchema);

module.exports = schemaComposto;

