const mongoose = require("mongoose");
const MidtermSchema = mongoose.Schema(
  {
    name: String,
    age: Number,
    major: String
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Midterm", MidtermSchema);
