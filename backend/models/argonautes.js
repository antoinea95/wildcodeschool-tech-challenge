const mongoose = require("mongoose");

const argonautesSchema = mongoose.Schema({
  prenom: { type: String, required: true },
});


module.exports = mongoose.model("argonautes", argonautesSchema);