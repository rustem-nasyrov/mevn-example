const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Student schema
const studentSchemaDefinition = {
  name: { type: String, },
  email: { type: String, },
  phone: { type: String, },
};
const studentSchemaOptions = { collection: 'students', };
const studentSchema = new Schema(studentSchemaDefinition, studentSchemaOptions);

module.exports = mongoose.model('Student', studentSchema);
