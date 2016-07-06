var orm = require('../config/orm.js');


var addOrDevourBurger = {
  addBurger: function(nameInput, cb){
    orm.newBurger("burgers", nameInput, cb);
  },
  devourBurger: function(inputId, cb){
    orm.devoured("burgers", inputId, cb);
  },
  findAllBurgers: function(cb) {
    orm.allBurgers(cb);
  }
};

module.exports = addOrDevourBurger;