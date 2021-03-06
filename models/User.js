const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new require('mongoose').Schema({
  username: String,
  email: String,
  role: {
    type: String,
    enum: ['Boss', 'Developer', 'TA'],
    default: 'Boss'
  }
}, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });

userSchema.plugin(passportLocalMongoose, { usernameField: 'email' })

module.exports = require('mongoose').model('User', userSchema);