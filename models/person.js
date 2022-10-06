const mongoose=require("mongoose");
const schema= mongoose.Schema;


const personSchema = new schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    favfood: {type: Array, required: true},

  })
  const person = mongoose.model('person', personSchema);

  module.exports = person;