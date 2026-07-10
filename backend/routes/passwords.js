const express = require("express");
const router = express.Router();
const pool = require("../db");

// Get all passwords
router.get("/", async (req, res) => {
  try {
    const allPasswords = await pool.query("SELECT * FROM passwords");
    res.json(allPasswords.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Create a new password entry
router.post("/", async (req, res) => {
  try {
    const { website, email, password } = req.body;
    const newPassword = await pool.query(
      "INSERT INTO passwords (website, email, password) VALUES ($1, $2, $3) RETURNING *",
      [website, email, password],
    );
    res.json(newPassword.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Delete a password entry by ID
router.delete("/:id", async (req, res) => {
  try {
    const result = await pool.query(
      "DELETE FROM passwords WHERE id = $1 RETURNING *",
      [req.params.id],
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Password not found" });
    }
    res.json({ message: "Password deleted successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Update a password entry by ID
router.put("/:id", async (req, res) => {
  try {
    const { website, email, password } = req.body;
    const result = await pool.query(
      "UPDATE passwords SET website = $1, email = $2, password = $3 WHERE id = $4 RETURNING *",
      [website, email, password, req.params.id],
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Password not found" });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
