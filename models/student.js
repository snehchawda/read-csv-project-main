const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  name: { 
    type: String, 
    required: true 
  },
  standard: {
    type: Number,
    required: true
  }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;