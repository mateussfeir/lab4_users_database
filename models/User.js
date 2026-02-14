const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },

  username: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 100
  },

  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^\S+@\S+\.\S+$/, "Invalid email"]
  },

  address: {
    street: { type: String, required: true },
    suite: { type: String, required: true },
    city: {
      type: String,
      required: true,
      match: [/^[A-Za-z\s]+$/, "City must contain only letters and spaces"]
    },
    zipcode: {
      type: String,
      required: true,
      match: [/^\d{5}-\d{4}$/, "Zipcode format DDDDD-DDDD"]
    },
    geo: {
      lat: { type: String, required: true },
      lng: { type: String, required: true }
    }
  },

  phone: {
    type: String,
    required: true,
    match: [/^\d-\d{3}-\d{3}-\d{4}$/, "Phone format D-DDD-DDD-DDDD"]
  },

  website: {
    type: String,
    required: true,
    match: [/^https?:\/\/.+$/, "Website must start with http or https"]
  },

  company: {
    name: { type: String, required: true },
    catchPhrase: { type: String, required: true },
    bs: { type: String, required: true }
  }
});

module.exports = mongoose.model("User", userSchema);
