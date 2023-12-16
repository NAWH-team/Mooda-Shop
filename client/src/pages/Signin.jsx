import { useState , useContext} from "react";
import {useNavigate } from "react-router-dom";
import axios from 'axios'
const Signin= () => {
  const [email,setEmail]=useState()
  const navigate = useNavigate()
  const [password,setPassword]=useState()
  const Login = ()=>{
    try{
        if (password && email){
        const obj = {email:email,password:password}
        axios.post('http://localhost:8080/user/signin',obj).then((res) => {
            
        res.data.existingUser.type = "user"
        window.localStorage.setItem('current',JSON.stringify(res.data.existingUser));
        console.log(res.data);
      })
      .then(() => navigate('/'));
  }
} catch (err) {
  alert('Register first');
}
          
      }
  
      return (
        <div className="  lg:flex lg:flex-col-2">
         
    
          <div className="lg:block hidden m-20">
          <img class="w-[243.52px] h-[477px]" src="https://s3-alpha-sig.figma.com/img/a59c/1e4a/905494d13b92596161da408b21648aa6?Expires=1703462400&Signature=ph1rrOffokpkaiR4HZ8Oto0UR8ExmYlJNwE~n8GUBRj-dY0aM872pO9HOO4OCQnL4pjzj7-RoUDXKjGa7hWNRtLRnl~inYgsjE3UixIJ0E4civNZdYCfEJVVfvQj7Z~mQsUjNH-PPlJfmaNKrQpUdGbqpbn9uUbbIRsTmaQ9HpeoOSOUyUagyWLHVO4IQroHJYpaK5NslbdGnQ8M734dDOkkR3PMRlhLvDaRQXMr311xZlau86vMV2sGUbDz~1~41C~32b0fi-a~OfsdC0UhuhoZH8ZR4xRsUElxBAQI7gmQ1fJYzPJGQ4FWHm6HgwgZRgrIGUWW2VRxT5OSIW6-CA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
          </div>
          <div className="float-right lg:m-40 relative bottom-0 ">
          <div class="w-[527px] h-[499px] bg-white bg-opacity-20 rounded-[10px]">
           <div className="float-left m-8 lg:relative relative left-40 lg:left-0">
    
           <div class=" text-white text-3xl font-extrabold font-['SF Pro Display'] tracking-tight">Sign In</div>
           <div><span className="text-white text-lg font-normal font-['SF Pro Display'] tracking-tight relative">New user?</span><span className="text-indigo-500 text-lg font-medium font-['SF Pro Display'] tracking-tight"> Create an account</span></div>
           </div>
           <div>
           </div>
           
           <div class=" lg:left-10 relative left-32 lg:relative top-10  ">
           <div class="text-white text-lg font-normal font-['SF Pro Display'] tracking-tight relative top-24 right-72">Email Address</div>
           <input
           onChange={(e)=>setEmail(e.target.value)}
             type="text" name="brand" id="brand" class=" w-[350px] relative top-2  border border-white border-opacity-0 text-gray-900 text-sm  focus:ring-primary-600 focus:border-primary-600 block  p-2.5 bg-red-200 bg-opacity-0 dark:border-white-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
           <div class="w-[350px]  h-[0px] border border-white border-opacity-50 ">
           </div>
           </div>
           <div class=" lg:left-10 relative left-32 lg:relative top-32  ">
           <div class="text-white text-lg font-normal font-['SF Pro Display'] tracking-tight relative ">Password</div>
           <input 
             onChange={(e)=>setPassword(e.target.value)}
            type="password" name="brand" id="brand" class=" w-[350px] relative top-2  border border-white border-opacity-0 text-gray-900 text-sm  focus:ring-primary-600 focus:border-primary-600 block  p-2.5 bg-red-200 bg-opacity-0 dark:border-white-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
           <div class="w-[350px]  h-[0px] border border-white border-opacity-50 ">
           </div>
           </div>
           <button onClick={Login} class="text-white text-base font-normal font-['Poppins'] float-right m-8 relative top-40 ">Login</button>
            </div>     
           </div>
          
        </div>
      )
};

export default Signin;
  
