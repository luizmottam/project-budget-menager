const db = require('./database');

// CRUD Despesa

// Create/Insert
function createExpense({category, amount, description, date}) {
    db.run("INSERT INTO expenses (category, amount, description, date) VALUES (?, ?, ?, ?);", [category, amount, description, date], function(err) {
        if (err) {
            console.error("Error inserting data:", err.message);
        } else {
            console.log("New expense created with ID:", this.lastID);
        }
    });
}

// Read
function readExpense(callback) {
    db.all("SELECT * FROM expenses;", [], (err, rows) => {
        if (err) {
            console.error("Error reading data:", err.message);
            callback(err, null);
        } else {
            callback(null, rows);
        }
    });
}

// Update
function updateExpense(id, {category, amount, description, date}) {
    db.run("UPDATE expenses SET category = ?, amount = ?, description = ?, date = ? WHERE id = ?;", [category, amount, description, date, id], function(err) {
        if (err) {
            console.error("Error updating data:", err.message);
        } else {
            console.log(`Expense with ID ${id} updated successfully.`);
        }
    });
}

// Delete
function deleteExpense(id) {
    db.run("DELETE FROM expenses WHERE id = ?;", [id], function(err) {
        if (err) {
            console.error("Error deleting data:", err.message);
        } else {
            console.log(`Expense with ID ${id} deleted successfully.`);
        }
    });
}

// Export functions
module.exports = {
    createExpense,
    readExpense,
    updateExpense,
    deleteExpense
};

// CRUD Distribuição de renda