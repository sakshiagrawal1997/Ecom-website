const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getProductById,
} = require("../controller/productControllers");

// Get all product from db
router.get("/", getAllProducts);

// Get a product by id from db
router.get("/:id", getProductById);

module.exports = router;