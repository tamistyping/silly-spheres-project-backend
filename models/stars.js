const mongoose = require("mongoose");

const starSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
})

const Star = mongoose.model("Stars", starSchema);

module.exports = Star;