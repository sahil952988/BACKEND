const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  shippingAddress: {
    address: {
      type: Boolean,
      default: '',
    },
    city: {
      type: Boolean,
      default: '',
    },
    isEmpty: {
      type: Boolean,
      default: true,
    }
  }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;



