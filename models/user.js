'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  User.prototype.comparePassword = (passw, cb) => {
    bcrypt.compare(passw, this.password, (err, isMatch)=> {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
  };
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Tasks)
  };
  return User;
};
