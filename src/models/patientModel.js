const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  address: {
    type: String
  },
  medicalHistory: {
    type: String
  },
  allergies: {
    type: [String]
  },
  appointments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Appointment'
    }
  ],
  age: {
    type: Number
  },
  height: {
    type: Number
  },
  weight: {
    type: Number
  },
  bloodPressure: {
    systolic: {
      type: Number
    },
    diastolic: {
      type: Number
    }
  },
  sugarLevel: {
    type: Number
  },
  oxygenLevel: {
    type: Number
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Calculate age based on date of birth
patientSchema.virtual('age').get(function() {
  const currentDate = new Date();
  const birthDate = new Date(this.dateOfBirth);
  const ageInMilliseconds = currentDate - birthDate;
  const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25); // Adjusting for leap years
  return Math.floor(ageInYears);
});

// Calculate BMI based on height and weight
patientSchema.virtual('bmi').get(function() {
  const heightInMeters = this.height / 100; // Convert height to meters
  const bmi = this.weight / (heightInMeters * heightInMeters);
  return parseFloat(bmi.toFixed(2));
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
