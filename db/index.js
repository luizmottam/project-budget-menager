const db = require('./database');

// CRUD Despesa

// Create/Insert
function create({category, amount, description, date}) {
    db.run("INSERT INTO expenses (category, amount, description, date) VALUES (?);", category, amount, description, date);
}

// Read
function read() {

}

// Update
function update() {

}


// Delete
function delete() {
    
}


// CRUD Distribuição de renda