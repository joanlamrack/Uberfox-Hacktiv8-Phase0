const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./address_book.db");

module.exports = db;