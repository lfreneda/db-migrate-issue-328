// Generated by CoffeeScript 1.10.0
(function() {
  'use strict';
  var tableName;

  tableName = 'users';

  exports.up = function(db, callback) {
    var options;
    options = {
      columns: {
        id: {
          type: 'int',
          primaryKey: true,
          autoIncrement: true
        },
        email: {
          type: 'string',
          notNull: true
        },
        password: {
          type: 'string',
          notNull: true
        }
      },
      ifNotExists: true
    };
    return db.createTable(tableName, options, callback);
  };

  exports.down = function(db, callback) {
    var options;
    options = {
      ifExists: true
    };
    return db.dropTable(tableName, options, callback);
  };

}).call(this);

//# sourceMappingURL=20151117231409-create-users-table.js.map
