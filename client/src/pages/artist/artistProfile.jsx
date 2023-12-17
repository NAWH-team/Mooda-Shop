import { FaCamera } from "react-icons/fa";
// import FAQ from "../faqPages/faq"; 
import { useEffect, useState , useContext } from "react";
import axios from "axios";
import NoPost from '../../assets/PROFILEPAGE/noPos.png'
import { MyContext } from "../../myContext";
import { jwtDecode } from "jwt-decode";
import CreatePost from "./createPost";
import ArtistEdit from "./artistEdit";
import { MdEdit } from "react-icons/md";

const ArtistPage = () => {
  
  const [view , setView] = useState()
  const [posts, setPosts] = useState([]);
  const {Token ,id}  = JSON.parse(window.localStorage.getItem('User'))
  const [artist,setArtist]= useState( jwtDecode(Token))
  useEffect(() => {
    const getPosts = async () => {
      try {
        var { data } = await axios.get(`http://localhost:8080/post/all/${id}`);
        setPosts(data);
      } catch (err) {}
    };
    getPosts();
  }, []);
  const Edit = ()=>{
    setView('edit')
  }
  return (
    <div>
      <div className="lg:m-32 m-3 ">
         
       <img 
       src={artist.cover}
       className= "lg:w-[1040px]  lg:h-[355px]   bg-black bg-opacity-50 rounded-[5px]"/>
       <button  onClick={()=>setView('edit')} class=" relative bottom-14 float-right right-5  w-[39px] h-[39px] p-2.5 bg-red-500 rounded-[400px] justify-center items-center text-white gap-2.5 inline-flex">
        <MdEdit  />
       </button>
       <button  onClick={()=>setView('create')} class=" relative bottom-0 float-right right-0  w-[40px] h-[40px] lg:w-[170px] lg:h-[40px] p-2.5 bg-red-500 rounded-[400px] justify-center items-center text-white gap-2.5 inline-flex">
        <MdEdit  />  post
       </button>
       
      <div className=" grid justify-items-center bottom-12 relative left-10 lg:relative lg:left-24">
      <img className="lg:w-[120px] lg:h-[120px] h-[80px] w-[80px]  rounded-full border-2  border-white" src={artist.img}/>
      <h1 className=" text-white text-[18px] lg:text-[28px] font-semibold font-['SF Pro Display']">{artist.name} {artist.lastName}</h1>
      <h2 className=" text-center lg:text-xs text-white text-opacity-80 text-base font-normal font-['SF Pro Display'] leading-[25px]">{artist.bio}</h2>
      </div>
      </div>
      <div className=" relative top-80px">

{   view === 'edit' && <div>  <ArtistEdit id={id} artist={artist}/>
<button onClick={()=>setView('')} type="button" class="lg:relative lg:bottom-[680px] lg:left-64 relative bottom-[700px] text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
    X
</button>
</div>
} 
{ view === 'create' && <div>
<CreatePost user={id}/>
<button onClick={()=>setView('')} type="button" class=" relative bottom-[600px] left-[310px] lg:relative lg:bottom-[650px]  lg:left-[450px] text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
    X 
</button>
</div>}
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

export default ArtistPage;
