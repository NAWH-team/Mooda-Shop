import React, { useState } from "react";
import { Link, useActionData, useNavigate } from "react-router-dom";
import axios from "axios";
    import { storage } from "../firebase.js";
    import { ref,uploadBytes,getDownloadURL, listAll } from 'firebase/storage'
    const Signup = () => {
        const [img,setImg] = useState(null)
        const [imgUrl, setImgUrl] = useState(""); // New state to store image URL
        const [name,setName]=useState("")
        const [lastName,setlastName]=useState("")
        const[email,setEmail]=useState("")
        const[password,setPassword]=useState("")
        const[day,setDay]=useState("")
        const[year,setYear]=useState("")
        const[month,setMonth]=useState("")
        const navigate = useNavigate();
        const [error, setError] = useState(null);

    const uploadImage = () => {
        if (img === null) return;
    
        const imageRef = ref(storage, '/userImages/qsdqsdqsqd');
    
        uploadBytes(imageRef, img)
          .then((res) => getDownloadURL(res.ref))
          .then((result) => {
            console.log(result);
            setImgUrl(result); // Set the image URL in the state
          })
          .catch((error) => {
            console.error("Error uploading image:", error);
          });
      }; 
      const birthDate = `${year}-${month}-${day}`

    const handelSubmit = async (e) => {
      console.log('here');
    e.preventDefault();
    var obj ={name,lastName,password,email,img:imgUrl,birthDate}
    console.log(obj);
    try {
      await axios.post("http://localhost:8080/user/signup", obj)
      navigate("/signin");
    } catch (err) {
      console.log(err)
    }
  };

    return (
      <div className="flex flex-col-1 relative left-40 gap-60">
      <img
        class=" w-[302px] h-[477px]  lg:top-32"
        src="https://s3-alpha-sig.figma.com/img/a59c/1e4a/905494d13b92596161da408b21648aa6?Expires=1703462400&Signature=ph1rrOffokpkaiR4HZ8Oto0UR8ExmYlJNwE~n8GUBRj-dY0aM872pO9HOO4OCQnL4pjzj7-RoUDXKjGa7hWNRtLRnl~inYgsjE3UixIJ0E4civNZdYCfEJVVfvQj7Z~mQsUjNH-PPlJfmaNKrQpUdGbqpbn9uUbbIRsTmaQ9HpeoOSOUyUagyWLHVO4IQroHJYpaK5NslbdGnQ8M734dDOkkR3PMRlhLvDaRQXMr311xZlau86vMV2sGUbDz~1~41C~32b0fi-a~OfsdC0UhuhoZH8ZR4xRsUElxBAQI7gmQ1fJYzPJGQ4FWHm6HgwgZRgrIGUWW2VRxT5OSIW6-CA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
      />
      <div className="flex justify-center items-center lg:relative lg:left-[300px] top-20">
        <div className=" bg-black h-[900px] w-[370px] lg:w-[527px] lg:h-[899px] bg-opacity-20 rounded-[10px]">
          <div className="flex flex-col m-8 float-left">
            <div class="text-center relative right-16 text-white text-3xl font-extrabold font-['SF Pro Display'] tracking-tight float-left">
              Sign Up
            </div>
            <div className="relative top-10">
              <span className=" text-white text-lg font-normal font-['SF Pro Display'] tracking-tight">
                Already a Member?
              </span>
              <span onClick={()=>navigate('/signin')} className=" hover:cursor-pointer text-indigo-500 text-lg font-medium font-['SF Pro Display'] tracking-tight">
                {" "}
                Sign In
              </span>
            </div>
            <div className="relative top-24 right-10">
  
            <div className="m-8">
  
  <div class="text-white text-[18px]  lg:text-lg font-normal font-['SF Pro Display'] tracking-tight ">
    Email Address
  </div>
  <div className="">
  
  <input
  onChange={(e)=>setEmail(e.target.value)}
  className="   bg-green-50 border dark:text-white placeholder-red-700 dark:placeholder-red-500 text-sm
  rounded-lg block w-[250px] lg:w-[400px] p-2.5 dark:bg-opacity-0 dark:bg-white-700 dark:border-opacity-0 dark:border-red-100"
  />
    <div class=" w-[250px] lg:w-[459px] h-[0px] border border-white border-opacity-50 relative "></div>
    </div>
  </div>
  <div className="flex flex-col-2 w-40">
    
  <div className="m-8">
  
  <div class="text-white text-[18px]  lg:text-lg font-normal font-['SF Pro Display'] tracking-tight ">
    Name
  </div>
  <div className="">
  
  <input
    onChange={(e)=>setName(e.target.value)}
  className="   bg-green-50 border dark:text-white placeholder-red-700 dark:placeholder-red-500 text-sm
  rounded-lg  block w-[100px] lg:w-[170px] p-2.5 dark:bg-opacity-0 dark:bg-white-700 dark:border-opacity-0 dark:border-red-100"
  />
    <div class=" w-[100px] lg:w-[170px] h-[0px] border border-white border-opacity-50 relative "></div>
    </div>
  </div>
  <div className="m-8">
  
  <div class="text-white text-[18px]  lg:text-lg font-normal font-['SF Pro Display'] tracking-tight ">
    Last Name
  </div>
  <div className="">
  
  <input
  onChange={(e)=>setlastName(e.target.value)}
  className="   bg-green-50 border  dark:text-white placeholder-red-700 dark:placeholder-red-500 text-sm
  rounded-lg  block w-[100px] lg:w-[170px] p-2.5 dark:bg-opacity-0 dark:bg-white-700 dark:border-opacity-0 dark:border-red-100"
  />
    <div class=" w-[100px] lg:w-[170px] h-[0px] border border-white border-opacity-50 relative "></div>
    </div>
  </div>
  
  </div>
  
  <div className="m-8">
  
  <div class="text-white text-[18px]  lg:text-lg font-normal font-['SF Pro Display'] tracking-tight ">
  Password 
  </div>
  <div className="">
  
  <input
  onChange={(e)=>setPassword(e.target.value)}
  type="password"
  className="   bg-green-50 border dark:text-white placeholder-red-700 dark:placeholder-red-500 text-sm
  rounded-lg block w-[250px] lg:w-[400px] p-2.5 dark:bg-opacity-0 dark:bg-white-700 dark:border-opacity-0 dark:border-red-100"
  />
    <div class=" w-[250px] lg:w-[459px] h-[0px] border border-white border-opacity-50 relative "></div>
    </div>
    <div className="relative top-12">
    <div class="text-white text-lg font-normal font-['SF Pro Display'] tracking-tight">Date Of Birth</div>
      <div className="flex flex-col-3 relative top-10 gap-4 lg:gap-12">
        <div>
  
      <input
      onChange={(e)=>setMonth(e.target.value)}
     placeholder="Month"
  className="   bg-green-50 border dark:text-white placeholder-white dark:placeholder-red-500 text-sm
  rounded-lg  block w-[100px] lg:w-[120px] p-2.5 dark:bg-opacity-0 dark:bg-white-700 dark:border-opacity-0 dark:border-red-100"
  />
    <div class=" w-[100px] lg:w-[120px] h-[0px] border border-white border-opacity-50  "></div>
  </div>
        <div>
  
      <input
      onChange={(e)=>setDay(e.target.value)}
     placeholder="Day"
  className="   bg-green-50 border  dark:text-white placeholder-white dark:placeholder-red-500 text-sm
  rounded-lg  block w-[100px] lg:w-[120px] p-2.5 dark:bg-opacity-0 dark:bg-white-700 dark:border-opacity-0 dark:border-red-100"
  />
    <div class=" w-[100px] lg:w-[120px] h-[0px] border border-white border-opacity-50  "></div>
  </div>
        <div>
  
      <input
      onChange={(e)=>setYear(e.target.value)}
     placeholder="Year"
  className="   bg-green-50 border  dark:text-white placeholder-white dark:placeholder-red-500 text-sm
  rounded-lg  block w-[100px] lg:w-[120px] p-2.5 dark:bg-opacity-0 dark:bg-white-700 dark:border-opacity-0 dark:border-red-100"
  />
    <div class=" w-[100px] lg:w-[120px] h-[0px] border border-white border-opacity-50  "></div>
  </div>
  
  
      </div>
      <button onClick={handelSubmit} class=" float-right relative top-32 right-20 lg:relative lg:top-20 w-[175px] h-[47px] px-5 py-2.5 bg-gradient-to-bl from-purple-500 to-violet-700 rounded-[121px] justify-center items-center gap-2.5 inline-flex">
      <div class="text-white text-[17px] font-medium font-['Poppins']">Create Account</div>
  </button>
    </div>
  </div>
  
  
  </div>
  
          </div>
          
  
    
            <div>
  
          
  
  
        </div>
            </div>
            
        </div>
      </div>

  )
}

     
export default Signup 