import React, { useState } from "react";
import { Link, useActionData, useNavigate } from "react-router-dom";
import axios from "axios";
    import { storage } from "../../firebasejsx";
    import { ref,uploadBytes,getDownloadURL, listAll } from 'firebase/storage'
    const ArtistSignUp = () => {
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
    e.preventDefault();
    var obj ={name,lastName,password,email,img:imgUrl,birthDate}
    try {
      await axios.post("http://localhost:8080/artist/signup", obj);
      navigate("/signin");
    } catch (err) {
      setError(err);
    }
  };

    return (
         <div className="w-[1132px] h-[650px] relative">
            <img className="w-[250.52px] h-[490px] relative left-40 " src="https://s3-alpha-sig.figma.com/img/a59c/1e4a/905494d13b92596161da408b21648aa6?Expires=1703462400&Signature=ph1rrOffokpkaiR4HZ8Oto0UR8ExmYlJNwE~n8GUBRj-dY0aM872pO9HOO4OCQnL4pjzj7-RoUDXKjGa7hWNRtLRnl~inYgsjE3UixIJ0E4civNZdYCfEJVVfvQj7Z~mQsUjNH-PPlJfmaNKrQpUdGbqpbn9uUbbIRsTmaQ9HpeoOSOUyUagyWLHVO4IQroHJYpaK5NslbdGnQ8M734dDOkkR3PMRlhLvDaRQXMr311xZlau86vMV2sGUbDz~1~41C~32b0fi-a~OfsdC0UhuhoZH8ZR4xRsUElxBAQI7gmQ1fJYzPJGQ4FWHm6HgwgZRgrIGUWW2VRxT5OSIW6-CA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
      <div className="w-[531px] h-[850px] left-[601px] top-0 absolute bg-white bg-opacity-20 rounded-[10px]" />
      
      <div className="w-[426px] left-0 top-[534px] absolute text-center text-white text-[28px] font-bold font-['SF Pro Display'] leading-[38px] tracking-tight">
        Begin your meta fashion journey here
      </div>
      
      <div className="left-[732px] top-[0px] absolute">
        <span className="text-white text-lg font-normal font-['SF Pro Display'] tracking-tight">Already a Member?</span>
        <span className="text-indigo-500 text-lg font-normal font-['SF Pro Display'] tracking-tight"> </span>
        <a className="text-indigo-500 text-lg font-medium font-['SF Pro Display'] tracking-tight" href="/signin">Sign In</a>
      </div>
      <div className="relative bottom-[450px] left-[800px]">
      <img
              className="w-32 h-32 lg:w-[120px] lg:h-[120px] rounded-full border-4 border-[#F8DE22]"
              src={imgUrl}
              alt="Artist Avatar"
            />
        <input className='relative right-20' type="file" onChange={
            (event)=>{
              setImg (event.target.files[0])
            }
        }/>
        <button  className="text-white text-[17px] font-medium font-['Poppins']" onClick={uploadImage}>Add Image </button>
      </div>
      
      {/* Input for Email */}
      <div className="w-[459px] h-[33px] left-[631px] top-[253px] absolute space-y-4">
        <input onChange={(e)=>setEmail(e.target.value)} placeholder='email' className= "bg-transparent left-[1px] top-0 absolute text-white text-lg font-normal font-['SF Pro Display'] tracking-tight">
        </input>
        <div className="w-[459px] h-[0px] left-0 top-[33px] absolute border border-white border-opacity-50"></div>
      </div>
      
      {/* Input for Password */}
      <div className="w-[459px] h-[33px] left-[631px] top-[439px] absolute space-y-4">
        <input  onChange={(e)=>{setPassword(e.target.value)}} placeholder='password' className= "bg-transparent left-[1px] top-0 absolute text-white text-lg font-normal font-['SF Pro Display'] tracking-tight">
        </input>
        <div className="w-[459px] h-[0px] left-0 top-[33px] absolute border border-white border-opacity-50"></div>
      </div>
      
      {/* Inputs for Full Name and Last Name */}
      <div className="w-[458px] h-[33px] left-[632px] top-[346px] absolute space-y-4">
        <div className="w-[229px] h-[33px] left-0 top-0 absolute space-y-4">
          <input onChange={(e)=>setName(e.target.value)} placeholder='firstName' className= "bg-transparent left-[1px] top-0 absolute text-white text-lg font-normal font-['SF Pro Display'] tracking-tight">
          </input>
          <div className="w-[229px] h-[0px] left-0 top-[33px] absolute border border-white border-opacity-50"></div>
        </div>
        <div className="w-[204px] h-[33px] left-[254px] top-0 absolute space-y-4">
          <input onChange={(e)=>setlastName(e.target.value)} placeholder="LastName" className= "bg-transparent left-[1px] top-0 absolute text-white text-lg font-normal font-['SF Pro Display'] tracking-tight">
        
          </input>
          <div className="w-[204px] h-[0px] left-0 top-[33px] absolute border border-white border-opacity-50"></div>
        </div>
      </div>
      
      {/* Input for Date of Birth */}
      <div className="w-[459px] h-[81px] left-[631px] top-[532px] absolute space-y-4">
        <div className="left-[1px] top-0 absolute text-white text-lg font-normal font-['SF Pro Display'] tracking-tight">
          Date Of Birth
        </div>
        <div className="w-[135px] h-[0px] left-0 top-[81px] absolute border border-white border-opacity-50"></div>
        <div className="w-[135px] h-[0px] left-[162px] top-[81px] absolute border border-white border-opacity-50"></div>
        <div className="w-[135px] h-[0px] left-[324px] top-[81px] absolute border border-white border-opacity-50"></div>
        
        <input onChange={(e)=>setMonth(e.target.value)} placeholder='month' className=" bg-transparent left-0 top-[56px] absolute text-white text-opacity-60 text-base font-normal font-['SF Pro Display'] tracking-tight">
        
        </input>
        <input onChange={(e)=>setDay(e.target.value)} placeholder='day'className=" bg-transparent left-[162px] top-[56px] absolute text-white text-opacity-60 text-base font-normal font-['SF Pro Display'] tracking-tight">
          
        </input>
        <input onChange={(e)=>setYear(e.target.value)} placeholder='year' className=" bg-transparent left-[324px] top-[56px] absolute text-white text-opacity-60 text-base font-normal font-['SF Pro Display'] tracking-tight">
        
        </input>
      </div>
      
      {/* Create Account Button */}
      <div className="w-[175px] h-[47px] px-5 py-2.5 left-[915px] top-[663px] absolute bg-gradient-to-bl from-purple-500 to-violet-700 rounded-[121px] justify-center items-center gap-2.5 inline-flex">
        <button className="text-white text-[17px] font-medium font-['Poppins']"  onClick={handelSubmit}>Create Account</button>
      </div>
    </div>
  )
}

     
export default ArtistSignUp 