const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./movie.db");

module.exports = db;