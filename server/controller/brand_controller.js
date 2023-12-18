const db = require("../model/index.js");
const Brand = db.brand
const Product = db.product
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
exports.findAll = async (req, res) => {
    try {
      const data =  await Brand.findAll()
      res.status(200).json(data)
    } catch (err) {
      res.status(500).send("Server Error");
    }
  };
  
  exports.Signup = async (req, res) => {
    
    const { name,email, password,img } = req.body;
  
    try {
      const existingBrand = await Brand.findOne({ where: { email } });
      if (existingBrand) {
        return res.status(409).json(existingBrand);
        } else {
          
        }
    
      const hashPassword = await bcrypt.hash(password, 10);
      const token = jwt.sign({ name ,img,status:'brand' },'shop');
  
      const newBrand = await Brand.create({
        name,
        password: hashPassword,
        email,
        img,
        token,
      });
  
     res.status(200).json('Brand created successfully');
      console.log(token);
    } catch (error) {
      console.error(error);
      res.status(500).send(error.message || "Internal Server Error");
    }
  };
  exports.Signin = async(req,res) =>{
    const {email,password}= req.body 
    try {
      const existingbrand = await Brand.findOne({where:{email}})
      if(!existingbrand){
        return res.status(400).send("Invalid email and password");
      }
      if(existingbrand){
        const checkPassword = await bcrypt.compare(
          password,
          existingbrand.password
          )
          if (checkPassword) {
          const token = existingbrand.token;
          res.cookie("access_token", token, { httpOnly: true }).status(200).json( {token, existingbrand})
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
      }).status("200").json('brand has been loged out')
  } 

  // Brand & Products : 

  exports.GetAllProducts = async(req,res)=>{

    try {
      const products =  await Product.findAll()
      res.status(200).json(products)
    } catch (err) {
      res.status(500).send(err);
    }
  }; 
  exports.createProduct = async(req,res)=>{
    console.log('hereee');
  try {
    const{id} = req.params
    const brand = await Brand.findOne({ where: {id} });

    if (!brand) {
      console.error('Brand not found');
      return;
    } 
     const {name,img,description,price,category,quantity,collection,status} = req.body 

    // Create a new product associated with the found brand
    const newProduct = await Product.create({
      name,
      img,
      description,
      price,
      category,
      quantity,
      collection,
      status,
      brandId: brand.id,
    });

    res.status(200).send('done');
  } catch (error) {
    console.error('Error creating product:', error);
  }
};
  