const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('movie.db');

function init() {
  db.serialize(function() {
    const qTablePH = `
        CREATE TABLE ProductionHouses
            (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              name_prodHouse varchar(50),
              origin_city varchar(50)
            )`;

    const qTableMovies = `
        CREATE TABLE Movies
              (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name varchar(50),
                released_year INTEGER,
                genre varchar(10),
                rating REAL,
                prodHouseId INTEGER,
                FOREIGN KEY (prodHouseId) REFERENCES ProductionHouses(id)
              )`;

    db.run(qTablePH, function(err) {
      if (!err) {
        console.log('Successfully created `ProductionHouses` table');
      } else {
        console.log(err);
      }
    });

    db.run(qTableMovies, function(err) {
      if (!err) {
        console.log('Successfully created `Movies` table');
      } else {
        console.log(err);
      }
    })

  })
}

init();
