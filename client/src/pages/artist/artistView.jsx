import { FaCamera } from "react-icons/fa";
import FAQ from "../faqPages/faq";
import { useEffect, useState , useContext } from "react";
import axios from "axios";
import NoPost from '../../assets/PROFILEPAGE/noPos.png'
import { MyContext } from "../../myContext";
import { jwtDecode } from "jwt-decode";
import CreatePost from "./createPost";
import ArtistEdit from "./artistEdit";
import { MdEdit } from "react-icons/md";

const ArtistPageView = () => {
  const {viewArtist} = useContext(MyContext)
  const [view , setView] = useState()
  const [posts, setPosts] = useState([]);
  const [artist,setArtist]= useState(viewArtist)
console.log(posts);
console.log(viewArtist);
  useEffect(() => {
    const getPosts = async () => {
      try {
        var { data } = await axios.get(`http://localhost:8080/post/all/${viewArtist.id}`);
        setPosts(data);
      } catch (err) {}
    };
    getPosts();
  }, 

  
  []);

  return (
    <div>
    <div className="lg:m-32 m-3 ">
       
     <img 
     src={artist.cover}
     className= "lg:w-[1040px]  lg:h-[355px]   bg-black bg-opacity-50 rounded-[5px]"/>
     
     
    <div className=" grid justify-items-center bottom-12 lg:relative ">
    <img className="lg:w-[120px] lg:h-[120px] h-[80px] w-[80px]  rounded-full border-2  border-white" src={artist.img}/>
    <h1 className=" text-white text-[18px] lg:text-[28px] font-semibold font-['SF Pro Display']">{artist.name} {artist.lastName}</h1>
    <h2 className=" text-center lg:text-xs text-white text-opacity-80 text-base font-normal font-['SF Pro Display'] leading-[25px]">{artist.bio}</h2>
    </div>
    </div>
    <div className=" relative top-80px">


</div>
    {/* all photos */}
    <div className="relative left-4  w-[345px] h-[371px] ">
    <div class="w-[345px] h-[371p-x] bg-white bg-opacity-10 rounded-[5px]">
      <div>

    <h1 class="p-4 text-white text-xl font-semibold font-['SF Pro Display'] tracking-tight">Photos</h1>
    <a class=" p-4 left-52 bottom-10 relative text-indigo-500 text-base font-semibold font-['SF Pro Display'] tracking-tight">See All Photos</a>
      </div>
      <div className="p-4 relative left-1 flex flex-wrap gap-2">
        { posts.slice(0,8).map((e)=>{
          return (
            <img class="w-[95px] h-[91px] rounded" src={e.img} />
          )
        })

          
        }

      </div>
    </div>
    {/* post */}

    </div>
    <div>

  {posts && 
     posts.map((e)=>{
      return (
        <div className="lg:w-[800px] lg:h-[729px] relative h-[600px] w-[200px] left-[10px] bottom-20 lg:float- lg:relative lg:bottom-[380px] lg:left-[400px] " >
           <div className="flex flex-wrap ">
          <img class="w-[43px] h-[43px] rounded-full" src={artist.img}/> 
          <div class="text-white text-xl font-semibold font-['SF Pro Display']">{artist.name}  {artist.lastName}</div>
          <div class="text-white text-opacity-50 text-base font-normal font-['SF Pro Display']">4m</div>  
          <div className="place-items-center relative top-10 "> 
          <div class="text-white text-base font-medium font-['SF Pro Display'] break-words  w-[370px] ">{e.title}</div>
          <div class="text-white text-base font-medium font-['SF Pro Display'] break-words  w-[370px]">{e.description}dsdqsdqs</div>
          <div>
          <img class="lg:w-[666px] lg:h-[426px] w-[350px] h-[400px] rounded-[5px]" src={e.img} />
          </div>

            </div>  
                       
        </div> 
      

</div>
      )
     })
  }
   
     
    </div>
   

  
  </div>
  );
};

export default ArtistPageView

