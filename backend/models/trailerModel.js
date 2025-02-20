const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const trailerSchema = new Schema({
  query: {
    type: String,
    required: true,
  },
  videoId: {
    type: String,
    required: true,
  },
});

const Trailer = mongoose.model("Trailer", trailerSchema);
module.exports = Trailer;
