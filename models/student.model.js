const mongoose = require("mongoose");

const StudentScheme = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    course: {
      type: String,
      required: true,
      trim: true,
    },
    year: {
      type: String,
      required: true,
      enum: [
        "First Year",
        "Second Year",
        "Third Year",
        "Fourth Year",
        "Fifth Year",
      ],
    },
    enrolled: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Student = mongoose.model("Student", StudentScheme);

module.exports = Student;
