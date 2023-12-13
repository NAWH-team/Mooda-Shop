import axios from "axios"
import { useEffect, useState } from "react"
import { BiDownvote,BiUpvote } from "react-icons/bi";
import { jwtDecode } from "jwt-decode";


const FAQ = ()=>{
    const [faq,setFaq] = useState()
    const [votes,setVotes]=useState()
    useEffect(()=>{
        console.log(faq);
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
        <div class="lg:w-[1197px] lg:h-[484px] lg:relative relative right-[100px] ">
        <div class="lg:w-[387px] lg:h-[184px] lg:left-[200px] md:relative md:left-[200px] top-0 left-40 relative flex-col justify-center items-center gap-2.5 inline-flex">
            <div class="text-center text-white text-[20px] lg:relative lg:left-[180px] lg:text-[40px] font-bold font-['Poppins'] leading-[72px]">Freaquently Asked<br/>Question</div>
            <div class="text-white text-opacity-50 text-xl font-medium font-['Poppins'] lg:relative lg:left-[180px]">Wanna Ask Something?</div>
        </div>
        <div class="lg:flex lg:flex-wrap lg:relative lg:right-10 lg:gap-20 realtive ">
    {faq && 
     faq.map((e)=>{
        return (
            <div> 
            <div class=" relative lg:p-2 m-2 left-40 ">
        <div class="lg:w-[18.05px] lg:left-[372.95px] lg:relative lg:top-10 relative text-white text-opacity-50 text-xl font-medium font-['Poppins']">+</div>
        <div class="lg:w-[459.99px] lg:left-0 lg:top-5 relative text-white text-opacity-50 text-xl font-medium font-['Poppins']"> {e.body}?</div>
        <div class="w-[259px] lg:w-[389.80px] lg:h-[0px] lg:left-0 lg:top-[50px] lg:relative relative bg-white bg-opacity-50 border border-white"></div>
      
        <div className="lg:relative lg:right-10 hover:cursor-pointe relative right-[50px] bottom-[50px] lg:bottom-[7px] text-white "> < BiUpvote className="text-green-500" onClick={()=>UpVote(e.id)} /> <h1 className="text-[20px] lg:relative lg:left-0.5">{e.Votes}</h1> <BiDownvote className="text-red-500" onClick={()=>downVote(e.id)}/>
</div>
    </div> 
   </div>
        )
     })
    }
    <div class="w-[101.22px] left-[200px] lg:realtive  lg:left-[600px] relative  h-[55px] p-[13.41px] bg-indigo-500 rounded-[206.71px] justify-center items-center gap-[13.41px] inline-flex">
    <button class="w-[100.56px] h-[28.17px] text-white text-lg font-medium font-['Poppins']">See more</button>
</div>
</div>
    </div>
    )
}

export default FAQ