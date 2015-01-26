var assert  = require('assert')
  , mongoose = require('mongoose')
  , schemaComposto = require('./index')
  , User = mongoose.model('User', schemaComposto)
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

describe('Schema Composto', function() {
  describe('Precisa inserir os dados do usuário com localização', function() {

    it('deve conectar no MongoDb', function(){

      mongoose.connect('mongodb://localhost/sub-schemas-poc', function(err) {
        if (err) {
          throw err;
        }
        return true;
      });
    });

    it('deve salvar no MongoDb e retornar o Objeto salvo', function() {
      // Testar o modelo salvo
      model.save(function(err, data) {
        if (err) {
          throw err;
        }
        assert.ok(data._id);
      });
    });

    it('deve salvar no MongoDb e retornar o Objeto salvo com nome = Suissa', function() {
      // Testar o modelo salvo
      model.save(function(err, data) {
        if (err) {
          throw err;
        }
        assert.equal(data.name, dados.name);
      });
    });

    it('deve salvar no MongoDb e retornar o Objeto salvo com country = Catland', function() {
      // Testar o modelo salvo
      model.save(function(err, data) {
        if (err) {
          throw err;
        }
        assert.equal(data.location.country, dados.location.country);
      });
    });

  });
});