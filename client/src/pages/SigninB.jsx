import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const SigninB = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = () => {
    try {
      if (password && email) {
        const obj = { email: email, password: password };
        axios
          .post("http://localhost:8080/brand/signin", obj)
          .then((res) => {
            window.localStorage.setItem("User", JSON.stringify(res.data));
          })
          .then(() => navigate("/"));
      }
    } catch (err) {
      alert("Register first");
    }
  };

  return (
    <div className="flex flex-col-1">
      <img
        class=" w-[302px] h-[477px] lg:relative lg:left-20 lg:block hidden lg:top-32"
        src="https://s3-alpha-sig.figma.com/img/a59c/1e4a/905494d13b92596161da408b21648aa6?Expires=1703462400&Signature=ph1rrOffokpkaiR4HZ8Oto0UR8ExmYlJNwE~n8GUBRj-dY0aM872pO9HOO4OCQnL4pjzj7-RoUDXKjGa7hWNRtLRnl~inYgsjE3UixIJ0E4civNZdYCfEJVVfvQj7Z~mQsUjNH-PPlJfmaNKrQpUdGbqpbn9uUbbIRsTmaQ9HpeoOSOUyUagyWLHVO4IQroHJYpaK5NslbdGnQ8M734dDOkkR3PMRlhLvDaRQXMr311xZlau86vMV2sGUbDz~1~41C~32b0fi-a~OfsdC0UhuhoZH8ZR4xRsUElxBAQI7gmQ1fJYzPJGQ4FWHm6HgwgZRgrIGUWW2VRxT5OSIW6-CA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
      />
      <div className="flex justify-center items-center lg:relative lg:left-[300px] top-20">
        <div className=" bg-black h-[800px] w-[370px] lg:w-[527px] lg:h-[799px] bg-opacity-20 rounded-[10px]">
          <div className="flex flex-col m-8 float-left">
            <div class="text-center relative right-16 text-white text-3xl font-extrabold font-['SF Pro Display'] tracking-tight float-left">
              Sign In
            </div>
            <div className="relative top-10">
              <span className=" text-white text-lg font-normal font-['SF Pro Display'] tracking-tight">
                New user?
              </span>
              <span onClick={()=>navigate('/signupB')} className=" hover:cursor-pointer text-indigo-500 text-lg font-medium font-['SF Pro Display'] tracking-tight">
                {" "}
                Create an account
              </span>
            </div>
          </div>

          
          <div className=" flex flex-col relative right-72 top-40   ">
            <div className="m-8">

            <div class="text-white text-[18px]  lg:text-lg font-normal font-['SF Pro Display'] tracking-tight ">
              Email Address
            </div>
            <div className="">

            <input
            onChange={(e)=>setEmail(e.target.value)}
              className="   bg-green-50 border border-green-500 text-green-900 dark:text-white placeholder-red-700 dark:placeholder-red-500 text-sm
              rounded-lg focus:ring-green-500 focus:border-green-500 block w-[250px] lg:w-[400px] p-2.5 dark:bg-opacity-0 dark:bg-white-700 dark:border-opacity-0 dark:border-red-100"
              />
              <div class=" w-[250px] lg:w-[459px] h-[0px] border border-white border-opacity-50 relative "></div>
              </div>
          </div>
            <div className="m-8">

            <div class="text-white text-[18px]  lg:text-lg font-normal font-['SF Pro Display'] tracking-tight ">
              Password
            </div>
            <div className="">

            <input type="password"
            onChange={(e)=>setPassword(e.target.value)}
              className="   bg-green-50 border border-green-500 text-green-900 dark:text-white placeholder-red-700 dark:placeholder-red-500 text-sm
              rounded-lg focus:ring-green-500 focus:border-green-500 block w-[250px] lg:w-[400px] p-2.5 dark:bg-opacity-0 dark:bg-white-700 dark:border-opacity-0 dark:border-red-100"
              />
              <div class=" w-[250px] lg:w-[459px] h-[0px] border border-white border-opacity-50 relative "></div>
              </div>
          </div>
          <button onClick={login} class=" relative left-56 lg:relative lg:left-[400px] w-[113px] h-8 px-5 py-2.5 bg-gradient-to-bl from-purple-500 to-violet-700 rounded-[121px] justify-center items-center gap-2.5 inline-flex">
    <div class="text-white text-base font-normal font-['Poppins']">Login</div>
</button>
              <h1 className="lg:relative lg:left-[260px] relative left-40 text-white text-xl">Or</h1>
            </div>
            <div>

          
        <div class="lg:w-[459px] lg:h-[72px] w-[300px] rounded-[171px] border border-white top-60 left-10 relative">
        <div className=" lg:relative lg:top-4 lg:left-28 flex flex-row m-1">

        <img class="w-[30px] h-[30px] " src="https://banner2.cleanpng.com/20180521/ers/kisspng-google-logo-5b02bbe1d5c6e0.2384399715269058258756.jpg"/>
        <button class="text-white text-lg font-medium font-['SF Pro Display'] tracking-tight">Continue With Google</button>        </div>

        </div>
        <div class="lg:w-[459px] lg:h-[72px] w-[300px] rounded-[171px] border border-white top-72 left-10 relative">
        <div className=" lg:relative lg:top-4 lg:left-28 flex flex-row m-1">

        <img class="w-[30px] h-[30px] " src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"/>
        <button class="text-white text-lg font-medium font-['SF Pro Display'] tracking-tight">Continue With Facebook</button>        </div>

        </div>
            </div>
        </div>
      </div>
    </div>
  );
  ;
};

export default SigninB;
