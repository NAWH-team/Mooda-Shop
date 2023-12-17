import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ArtistSignin = () => {
  const [email, setEmail] = useState();
  const navigate = useNavigate();
  const [password, setPassword] = useState();
  const Login = () => {
    try {
      if (password && email) {
        const obj = { email: email, password: password };
        axios
          .post("http://localhost:8080/artist/signin", obj)
          .then((res) => {
            window.localStorage.setItem("User", JSON.stringify(res.data));
          })
          .then(() => navigate("/")).catch(()=>{
            toast.error('something went wrong try again')
          })
      }
    } catch (err) {
      toast.error('something went wrong')
    }
  };

  return (
    <div className="flex flex-col-1 gap-80 top-32 relative">
      <img
class=" w-[302px] h-[477px] left-40 relative "
      src="https://s3-alpha-sig.figma.com/img/a59c/1e4a/905494d13b92596161da408b21648aa6?Expires=1703462400&Signature=ph1rrOffokpkaiR4HZ8Oto0UR8ExmYlJNwE~n8GUBRj-dY0aM872pO9HOO4OCQnL4pjzj7-RoUDXKjGa7hWNRtLRnl~inYgsjE3UixIJ0E4civNZdYCfEJVVfvQj7Z~mQsUjNH-PPlJfmaNKrQpUdGbqpbn9uUbbIRsTmaQ9HpeoOSOUyUagyWLHVO4IQroHJYpaK5NslbdGnQ8M734dDOkkR3PMRlhLvDaRQXMr311xZlau86vMV2sGUbDz~1~41C~32b0fi-a~OfsdC0UhuhoZH8ZR4xRsUElxBAQI7gmQ1fJYzPJGQ4FWHm6HgwgZRgrIGUWW2VRxT5OSIW6-CA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
      />
      <div className=" gap-10 ">
        <div className=" bg-black h-[500px] w-[570px] flex flex-col gap items-center bg-opacity-20 rounded-[10px]">
      <ToastContainer/>
          <div className="flex flex-col m-8 relative right-20  ">
            <div class=" text-white text-3xl font-extrabold font-['SF Pro Display'] tracking-tight float-left">
              Sign In
            </div>
            <div className="relative ">
              <span className=" text-white text-lg font-normal font-['SF Pro Display'] tracking-tight">
                Wanna Become An Artist and Create ?
              </span>
            
              <span
                onClick={() => navigate("/artist/signup")}
                className=" hover:cursor-pointer text-indigo-500 text-lg font-medium font-['SF Pro Display'] tracking-tight"
              >
                {" "}
                Create an account
              </span>
            </div>
          </div>

          <div className=" flex flex-col relative    ">
            <div className="m-8">
              <div class="text-white text-[18px]  lg:text-lg font-normal font-['SF Pro Display'] tracking-tight ">
                Email Address
              </div>
              <div className="">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="   bg-green-50 border text-white-900 dark:text-white placeholder-red-700 dark:placeholder-red-500 text-sm
              rounded-lg   block w-[250px] lg:w-[400px] p-2.5 dark:bg-opacity-0 dark:bg-white-700 dark:border-opacity-0 dark:border-red-100"
                />
                <div class=" w-[250px] lg:w-[459px] h-[0px] border border-white border-opacity-50 relative "></div>
              </div>
            </div>
            <div className="m-8">
              <div class="text-white text-[18px]  lg:text-lg font-normal font-['SF Pro Display'] tracking-tight ">
                Password
              </div>
              <div className="">
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="   bg-green-50 border dark:text-white placeholder-red-700 dark:placeholder-red-500 text-sm
              rounded-lg block w-[250px] lg:w-[400px] p-2.5 dark:bg-opacity-0 dark:bg-white-700 dark:border-opacity-0 dark:border-red-100"
                />
                <div class=" w-[250px] lg:w-[459px] h-[0px] border border-white border-opacity-50 relative "></div>
              </div>
            </div>
            <button
              onClick={Login}
              class=" relative left-56 lg:relative lg:left-[400px] w-[113px] h-8 px-5 py-2.5 bg-gradient-to-bl  bg-white bg-opacity-10 rounded-[121px] justify-center items-center gap-2.5 inline-flex"
            >
              <div class="text-white text-base font-normal font-['Poppins']">
                Login
              </div>
            </button>
          
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default ArtistSignin;

  