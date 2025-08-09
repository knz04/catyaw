const pool = require("../db");

async function addCat(req, res) {
  try {
    console.log("Received request body:", req.body);
    const { id, tags, mimetype, createdAt, notes } = req.body;

    if (!id) {
      console.error(
        "Validation Error: Cat ID is missing or null in request body."
      );
      return res.status(400).json({ message: "Cat ID is required." });
    }

    const existingCat = await pool.query(
      "SELECT id FROM saved_cats WHERE id = $1",
      [id]
    );
    if (existingCat.rows.length > 0) {
      return res.status(409).json({ message: "Cat already saved!" });
    }

    const result = await pool.query(
      "INSERT INTO saved_cats (id, tags, mimetype, created_at, notes) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [
        id,
        tags || [],
        mimetype || "image/jpeg",
        createdAt || new Date().toISOString(),
        notes || "",
      ]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error in addCat (controller):", error.message);
    res.status(500).json({ message: "Server Error: Could not save cat." });
  }
}

async function getAllCats(req, res) {
  try {
    const allCats = await pool.query(
      "SELECT * FROM saved_cats ORDER BY created_at DESC"
    );
    res.status(200).json(allCats.rows);
  } catch (error) {
    console.error("Error in getAllCats (controller):", error.message);
    res.status(500).json({ message: "Server Error: Could not retrieve cats." });
  }
}

async function getCatById(req, res) {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM saved_cats WHERE id = $1", [
      id,
    ]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Cat not found." }); // 404 Not Found
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error("Error in getCatById (controller):", error.message);
    res.status(500).json({ message: "Server Error: Could not retrieve cat." });
  }
}

async function updateCatNotes(req, res) {
  try {
    const { id } = req.params;
    const { notes } = req.body;

    if (notes === undefined || notes === null) {
      return res
        .status(400)
        .json({ message: "Notes field is required for update." });
    }

    const result = await pool.query(
      "UPDATE saved_cats SET notes = $1 WHERE id = $2 RETURNING *",
      [notes, id]
    );

    if (result.rows.length === 0) {
      return res
        .status(404)
        .json({ message: "Cat not found or notes could not be updated." });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error("Error in updateCatNotes (controller):", error.message);
    res
      .status(500)
      .json({ message: "Server Error: Could not update cat notes." });
  }
}

async function deleteCatById(req, res) {
  try {
    const { id } = req.params;

    const deleteResult = await pool.query(
      "DELETE FROM saved_cats WHERE id = $1 RETURNING id",
      [id]
    );

    if (deleteResult.rows.length === 0) {
      return res
        .status(404)
        .json({ message: "Cat not found or already deleted." });
    }

    res.status(200).json({
      message: "Cat deleted successfully!",
      id: deleteResult.rows[0].id,
    });
  } catch (error) {
    console.error("Error in deleteCatById (controller):", error.message);
    res.status(500).json({ message: "Server Error: Could not delete cat." });
  }
}

module.exports = {
  addCat,
  getAllCats,
  getCatById,
  deleteCatById,
  updateCatNotes,
};
