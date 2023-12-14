const db = require("../model/index.js");
const User = db.user;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.findAll = async (req, res) => {
  try {
    const data =  await User.findAll()
    res.status(200).json(data)
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

exports.Signup = async (req, res) => {
  const { name, lastName, email, password, birthDate, img } = req.body;

  try {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(409).json(existingUser);
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const token = jwt.sign({ name ,img,lastName,status:'user' },'secret');

    const newUser = await User.create({
      name,
      password: hashPassword,
      email,
      lastName,
      birthDate,
      img,
      token,
    });

   res.status(200).json('User created successfully');
    console.log(token);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message || "Internal Server Error");
  }
};
exports.Signin = async(req,res) =>{
  const {email,password}= req.body 
  try {
    const existinguser = await User.findOne({where:{email}})
    if(!existinguser){
      return res.status(400).send("Invalid email and password");
    }
    if(existinguser){
      const checkPassword = await bcrypt.compare(
        password,
        existinguser.password
        )
        if (checkPassword) {
        const token = existinguser.token;
        res.cookie("access_token", token, { httpOnly: true }).status(200).json(token)
        // res.status(200).json(token);
      } else {
        res.status(400).send("Invalid email and password");
      }
    }
  } catch (error){ 
      res.status(500).send(error);
    }
}
exports.logout = (req,res)=>{
    res.clearCookie("acces_token",{
        sameSite:"none",
       secure:true,
    }).status("200").json('user has been loged out')
}