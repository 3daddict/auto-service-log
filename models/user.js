const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true
  },
  password: {
    type: String
  }
});

// user instance hook
userSchema.pre("save", async function(next) {
  const user = this;
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
    next();
  } catch (err) {
    return next(err);
  }
});

userSchema.methods.comparePassword = function(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) {
      return callback(err);
    }
    callback(null, isMatch);
  });
};

exports = module.exports = mongoose.model("User", userSchema);
