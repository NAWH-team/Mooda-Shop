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
    console.log(name,lastName,email,password,birthDate);
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
    })
    
    
   res.status(200).json('User created successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message || "Internal Server Error");
  }
};


exports.Signin = async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ where: { email } });

    if (!existingUser) {
      return res.status(400).json(null); // User not found
    }

    const isPasswordValid = await bcrypt.compare(password, existingUser.password);

    if (isPasswordValid) {
      const token = { Token: existingUser.token, id: existingUser.id };

      // Set the token as a cookie (optional)
      res.cookie('access_token', token, { httpOnly: true });

      // Send the token in the response
      res.status(200).json(token);
    } else {
      res.status(400).send('Invalid email and password');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message || 'Internal Server Error');
  }
};

exports.logout = (req,res)=>{
    res.clearCookie("acces_token",{
        sameSite:"none",
       secure:true,
    }).status("200").json('user has been loged out')
}