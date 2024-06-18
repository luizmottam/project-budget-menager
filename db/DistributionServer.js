const db = require("./database");

// Create/Insert
function createDistribution({
  salary,
  tithing_percentage,
  investment_percentage,
  education_percentage,
  savings_percentage,
  wants_percentage,
  general_expenses_percentage,
  created_at,
}) {
  db.run(
    "INSERT INTO income_distribution (salary, tithing_percentage,investment_percentage, education_percentage, savings_percentage, wants_percentage, general_expenses_percentage, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?);",
    [
      salary,
      tithing_percentage,
      investment_percentage,
      education_percentage,
      savings_percentage,
      wants_percentage,
      general_expenses_percentage,
      created_at,
    ],
    function (err) {
      if (err) {
        console.error("Error inserting data:", err.message);
      } else {
        console.log("New income distribution created with ID:", this.lastID);
      }
    }
  );
}

// Read
function readDistribution(callback) {
  db.all("SELECT * FROM income_distribution;", [], (err, rows) => {
    if (err) {
      console.error("Error reading data:", err.message);
      callback(err, null);
    } else {
      callback(null, rows);
    }
  });
}

// Update
function updateDistribution(
  id,
  {
    salary,
    tithing_percentage,
    investment_percentage,
    education_percentage,
    savings_percentage,
    wants_percentage,
    general_expenses_percentage,
    created_at,
  }
) {
  db.run(
    "UPDATE income_distribution SET category = ?, amount = ?, description = ?, date = ? WHERE id = ?;",
    [
      salary,
      tithing_percentage,
      investment_percentage,
      education_percentage,
      savings_percentage,
      wants_percentage,
      general_expenses_percentage,
      created_at,
    ],
    function (err) {
      if (err) {
        console.error("Error updating data:", err.message);
      } else {
        console.log(`Income distribution with ID ${id} updated successfully.`);
      }
    }
  );
}

// Delete
function deleteDistribution(id) {
  db.run("DELETE FROM income_distribution WHERE id = ?;", [id], function (err) {
    if (err) {
      console.error("Error deleting data:", err.message);
    } else {
      console.log(`Income distribution ID ${id} deleted successfully.`);
    }
  });
}

// Export functions
module.exports = {
  createDistribution,
  readDistribution,
  updateDistribution,
  deleteDistribution,
};
