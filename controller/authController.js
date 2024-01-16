const User = require('../model/User');
const bcrypt = require('bcrypt');



module.exports.userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existUser = await User.findOne({ email: email });
    if (existUser) {

    } else {
      return res.status(401).json('user not found');
    }
  } catch (err) {
    return res.status(400).json(`${err}`);
  }
};


module.exports.userSignUp = async (req, res) => {
  const { email, password, fullname } = req.body;
  try {
    const existUser = await User.findOne({ email: email });
    if (existUser) {
      return res.status(401).json('user already exist');
    } else {
      const hashPassword = bcrypt.hashSync(password, 10);
      await User.create({
        email,
        password: hashPassword,
        fullname
      });
      return res.status(201).json('successfully register');
    }
  } catch (err) {
    return res.status(400).json(`${err}`);
  }
}