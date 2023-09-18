const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');
const authenticateToken = require('../middleware/authMiddleware');

// Route to get all doctors
router.get('/doctors',authenticateToken,doctorController.getAllDoctors);
 
// Route to create a new doctor
router.post('/doctors',authenticateToken,doctorController.createDoctor);

// Route to get a specific doctor by id
router.get('/doctors/:id', doctorController.getDoctorById);

// Route to update a doctor by id
router.patch('/doctors/:id', doctorController.updateDoctorById);

// Route to delete a doctor by id
router.delete('/doctors/:id', doctorController.deleteDoctorById);

router.get('/api/doctor',doctorController.calculateSlots)


module.exports = router;
