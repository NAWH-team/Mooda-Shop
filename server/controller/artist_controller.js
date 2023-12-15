const db = require("../model/index.js");
const Artist = db.artist;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.findAll = async (req, res) => {
  try {
    const data =  await Artist.findAll()
    res.status(200).json(data)
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

exports.Signup = async (req, res) => {
  const { name, lastName, email, password, birthDate, img } = req.body;
  try {
    const existingArtist = await Artist.findOne({ where: { email } });
    if (existingArtist) {
      return res.status(409).json(existingArtist);
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const token = jwt.sign({ email,name ,img,lastName,status:'Artist' },'secret');

    const newArtist = await Artist.create({
      name,
      password: hashPassword,
      email,
      lastName,
      birthDate,
      img,
      token,
    })
    
    
   res.status(200).json('Artist created successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message || "Internal Server Error");
  }
};
exports.Signin = async(req,res) =>{
  const {email,password}= req.body 
  try {
    const existingArtist = await Artist.findOne({where:{email}})
    if(!existingArtist){
      return res.status(400).send("Invalid email and password");
    }
    if(existingArtist){
      const checkPassword = await bcrypt.compare(
        password,
        existingArtist.password
        )
        if (checkPassword) {
        const token = {Token :existingArtist.token,id:existingArtist.id};
        res.cookie("access_token", token, { httpOnly: true }).status(200).json(token)
        // res.status(200).json(token);
      } else {
        res.status(400).send("Invalid email and password");
      }
    }
  } catch (error){ 
       console.log(error);
      res.status(500).send(error);
    }
}
exports.logout = (req,res)=>{
    res.clearCookie("acces_token",{
        sameSite:"none",
       secure:true,
    }).status("200").json('Artist has been loged out')
}

exports.update= async (req,res)=>{
   const  {name,lastName,img,id}= req.body
  try {
    const data = await Artist.update({name:name,lastName:lastName,img:img},{where:{
        id:id}
    })
    res.json(data)
  }catch(err){
    res.json(err)
  }
}