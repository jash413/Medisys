const express = require("express");
const router = express.Router();
const ehrController = require("../controllers/ehrController");

// Create a new record for a specific component
router.post("/api/ehr/:component", ehrController.createRecord);

// Retrieve records for a specific component
router.get("/api/ehr/:component/:id", ehrController.getRecordsForComponent);

// Update a record for a specific component
router.put("/api/ehr/:component/:id", ehrController.updateRecord);

// Delete a record for a specific component
router.delete("/api/ehr/:component/:id", ehrController.deleteRecord);

module.exports = router;
