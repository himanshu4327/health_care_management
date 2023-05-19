const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  specialization: {
    type: String,
    required: true
  },
  availability: [
    {
      date: {
        type: Date,
        required: true
      },
      maxAppointments: {
        type: Number,
        default: 10,
        required: true
      },
      appointmentsBooked: {
        type: Number,
        default: 0,
        required: true
      }
    }
  ],
  appointments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Appointment'
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

doctorSchema.methods.isAvailable = function (date) {
  const availability = this.availability.find((slot) => slot.date.getTime() === date.getTime());
  if (!availability) {
    return false;
  }
  return availability.appointmentsBooked < availability.maxAppointments;
};

doctorSchema.methods.bookAppointment = function (date) {
  const availability = this.availability.find((slot) => slot.date.getTime() === date.getTime());
  if (!availability || availability.appointmentsBooked >= availability.maxAppointments) {
    throw new Error('Doctor is not available for the selected date and time.');
  }
  availability.appointmentsBooked++;
};

doctorSchema.methods.cancelAppointment = function (date) {
  const availability = this.availability.find((slot) => slot.date.getTime() === date.getTime());
  if (!availability || availability.appointmentsBooked <= 0) {
    throw new Error('No appointment to cancel for the selected date and time.');
  }
  availability.appointmentsBooked--;
};

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
