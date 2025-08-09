const express = require("express");
const router = express.Router();
const {
  addCat,
  getAllCats,
  getCatById,
  deleteCatById,
  updateCatNotes,
} = require("../controllers/catControllers");

router.post("/", addCat);
router.get("/", getAllCats);
router.get("/:id", getCatById);
router.delete("/:id", deleteCatById);
router.put("/:id", updateCatNotes);

module.exports = router;
