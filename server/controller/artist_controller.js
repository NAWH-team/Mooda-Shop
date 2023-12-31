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
  const { name, lastName, email, password, birthDate } = req.body;
  try {
    const existingArtist = await Artist.findOne({ where: { email } });
    if (existingArtist) {
      return res.status(409).json(existingArtist);
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const token = jwt.sign({ email,name ,lastName,status:'artist' },'secret');

    const newArtist = await Artist.create({
      name,
      password: hashPassword,
      email,
      lastName,
      birthDate,
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

exports.update = async (req, res) => {
  const { name, lastName, img, id ,bio , cover } = req.body;
  const Token = jwt.sign({ bio,cover,name, lastName, img, id, status: 'artist' }, 'Secret');
  try {
     const [affectedRows] = await Artist.update(
        {cover:cover,bio:bio, name: name, lastName: lastName, img: img, token: Token },
        {
           returning: true,
           where: {
              id: id,
           },
        }
     );
     
        const updatedArtist = await Artist.findOne({where:{id:id}});
        res.json(Token); // Send the token from the updated artist
     
  } catch (err) {
     console.error(err);
     res.status(500).json({ error: 'Internal server error', details: err.message });
  }
};