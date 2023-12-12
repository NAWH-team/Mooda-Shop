const db = require("../model/index.js");
const User = db.user;

exports.findAll = async (req, res) => {
  try {
    const data =  await User.findAll()
    res.status(200).json(data)
  } catch (err) {
    res.status(500).send("Server Error");
  }
};