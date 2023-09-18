const Admission = require("../models/Admission");
const moment = require("moment");

// Controller for getting the admission/discharge/transfer statistics
exports.getAdmissionStatistics = async (req, res) => {
  try {
    const admissions = await Admission.find();
    res.status(200).json(admissions);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching admission statistics",
      error: error.message,
    });
  }
};

// Controller for creating a new admission record
exports.createAdmission = async (req, res) => {
  try {
    const { admissionTime } = req.body;
    // Convert 12-hour format times to 24-hour format using moment.js
    const convertedAdmissionTime = moment(admissionTime, "hh:mm A").format("HH:mm");

    const newAdmission = await Admission.create({...req.body, admissionTime: convertedAdmissionTime});
    res.status(201).json(newAdmission);
  } catch (error) {
    res.status(400).json({
      message: "Error creating admission record",
      error: error.message,
    });
  }
};

// Controller for updating an admission record
exports.updateAdmission = async (req, res) => {
  const { admissionId, status, dischargeDate, transferDate } = req.body;
  try {
    const updatedAdmission = await Admission.findByIdAndUpdate(
      admissionId,
      { status, dischargeDate, transferDate },
      { new: true }
    );
    if (!updatedAdmission) {
      return res.status(404).json({ message: "Admission record not found" });
    }
    res.status(200).json(updatedAdmission);
  } catch (error) {
    res.status(400).json({
      message: "Error updating admission record",
      error: error.message,
    });
  }
};
