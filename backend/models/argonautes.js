const mongoose = require("mongoose");

// schéma de donnée
const argonautesSchema = mongoose.Schema({
  prenom: { type: String, required: true },
});

module.exports = mongoose.model("argonautes", argonautesSchema);
