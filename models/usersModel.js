const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
  },
});

const usersModel = mongoose.model("users", usersSchema);

module.exports = usersModel;
