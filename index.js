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

User = mongoose.model('User', schemaComposto)
  , dados = { name: 'Suissa'
    , password: 'tetudo98232'
    , email: 'suissa@elmieste.com'
    , birth: new Date(1984, 11-1, 20) //-1 pq o mes começa em 0
    , location: { country: 'Catland'
      , city: 'Siames'
      , district: 'CrumpyCat'
      , address: 'Rua do Senhor Bigodinho'
      }
    }
  , model = new User(dados)
  ;
module.exports = schemaComposto;

// mongoose.connect('mongodb://localhost/sub-schemas-poc');
// // Testar o modelo salvo
// model.save(function(err, data) {
//   if (err) {
//     return err;
//   }
//   console.log('Objeto salvo: ', data);
// });
