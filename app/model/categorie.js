const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const categorySchecma = new Schema({
  name: string,
});
module.exports = mongoose.model("Category", categorySchecma);
