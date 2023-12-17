import axios from "axios"
import { useEffect, useState } from "react"
import { BiDownvote,BiUpvote } from "react-icons/bi";
import { jwtDecode } from "jwt-decode";


const FAQ = ()=>{
    const [faq,setFaq] = useState()
    const [votes,setVotes]=useState()
    useEffect(()=>{
     const getFaq =async ()=>{
        var {data} = await axios.get('http://localhost:8080/faq/all')
        setFaq(data)
     }
     getFaq()
    },[])

    const UpVote = (id)=>{
     axios.put('http://localhost:8080/faq/voteup',{id:id})
    }
    const downVote = (id)=>{
     axios.put('http://localhost:8080/faq/votedown',{id:id})
    }
    return (
        <div className="flex flex-col items-center relative ">
                <div className="flex flex-col items-center">
                <div class="text-center text-white text-[40px] font-bold font-['Poppins'] leading-[72px]">Freaquently Asked<br/>Question</div>
                <div class="text-white text-opacity-50 text-xl font-medium font-['Poppins']">Wanna Ask Something?</div>
                </div>
                <div className=" relative  flex flex-wrap m-20  ">

<div className=" flex items-center m-4 h-[200px] w-[300px]">
    <div className="w-[501px]">
    <div class=" text-white text-opacity-50 text-xl font-medium font-['Poppins'] float-right ">+</div>
    <div class=" relative top-4 text-white text-opacity-50 lg:text-xl font-medium font-['Poppins']">Lorem ipsum ipsum ?</div>
    <div class=" relative top-10   h-[0px] bg-white bg-opacity-50 border border-white"></div>
    </div>
   
</div>


</div>

              
            

        </div>
    )
}

export default FAQ
