const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("database.db");

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS income_distribution (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        salary REAL NOT NULL,
        tithing_percentage REAL NOT NULL,
        investment_percentage REAL NOT NULL,
        education_percentage REAL NOT NULL,
        savings_percentage REAL NOT NULL,
        wants_percentage REAL NOT NULL,
        general_expenses_percentage REAL NOT NULL,
        created_at DATETIME
        );`);

  db.run(`CREATE TABLE IF NOT EXISTS expenses (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        category TEXT NOT NULL,
        amount REAL NOT NULL,
        description TEXT,
        date DATETIME
        );`);
});

module.exports = db;
