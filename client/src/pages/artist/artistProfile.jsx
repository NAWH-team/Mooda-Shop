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

const ArtistPage = () => {
  const [view , setView] = useState()
  const [posts, setPosts] = useState([]);
 const {Token,id}  = JSON.parse(window.localStorage.getItem('User'))
  const [artist,setArtist]= useState(jwtDecode(Token))
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
console.log(posts);  
  return (
    <div>
      <div className="lg:m-32 m-3 ">
         
       <img 
       src="https://t3.ftcdn.net/jpg/05/96/09/62/360_F_596096212_DACXTnAgcHxxJmtyTxKe03SMi7LYrOgJ.jpg"
       className= "lg:w-[1040px]  lg:h-[355px]   bg-black bg-opacity-50 rounded-[5px]"/>
       <button  onClick={()=>setView('edit')} class=" relative bottom-14 float-right right-5  w-[39px] h-[39px] p-2.5 bg-red-500 rounded-[400px] justify-center items-center text-white gap-2.5 inline-flex">
        <MdEdit  />
       </button>
       <button  onClick={()=>setView('create')} class=" relative bottom-0 float-right right-0  w-[40px] h-[40px] lg:w-[170px] lg:h-[40px] p-2.5 bg-red-500 rounded-[400px] justify-center items-center text-white gap-2.5 inline-flex">
        <MdEdit  />  post
       </button>
       
      <div className=" grid justify-items-center bottom-12 relative left-6">
      <img className="w-[120px] h-[120px]  rounded-full border-2  border-white" src={artist.img}/>
      <h1 className=" text-white  text-[28px] font-semibold font-['SF Pro Display']">{artist.name} {artist.lastName}</h1>
      <h2 className=" text-center lg:text-xs text-white text-opacity-80 text-base font-normal font-['SF Pro Display'] leading-[25px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor, consectetur purus amet, accumsan nulla. Ut urna placerat morbi cursus pulvinar nunc adipiscing. Tortor, consectetur purus amet,
       accumsan nulla. Ut urna placerat morbi cursus pulvinar nunc adipiscing.</h2>
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
        <img class="w-[95px] h-[91px] rounded" src="https://via.placeholder.com/95x91" />

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
            <div class="text-white text-xl font-semibold font-['SF Pro Display']">Farhan Khan</div>
            <div class="text-white text-opacity-50 text-base font-normal font-['SF Pro Display']">4m</div>  
            <div className="place-items-center relative top-10 "> 
            <div class="text-white text-base font-medium font-['SF Pro Display'] break-words  w-[370px] ">{e.title}</div>
            <div class="text-white text-base font-medium font-['SF Pro Display'] break-words  w-[370px]">{e.description}dsdqsdqs</div>
            <div>
            <img class="lg:w-[666px] lg:h-[426px] w-[350px] h-[400px] rounded-[5px]" src={e.img} />
            </div>

              </div>  
                          {/* <div className="flex flex-nowrap relative top-0 gap-2   ">
         <img class="w-[43px]  h-[43px] rounded-full border-white border" src={artist.img} />
         <h1 class="w-[300px] relative left-2.5  top-0 text-white text-xl font-semibold font-['SF Pro Display']  inline-flex">{artist.name}{''}{artist.lastName}</h1>
         <h4 class="text-white relative left-12 bottom-4 text-opacity-50 text-base font-normal font-['SF Pro Display']">{e.createdAt.substring(0,10)}</h4>
         <h4 className="  lg:relative lg:top-32 relative left-[20px] top-20 text-white w-[200px] break-words ">{e.title}</h4>
         <img class="relative right-[420px] top-80 h-[500px] " src={e.img} /> */}
          </div>
        
 
      // </div>
        )
       })
    }
     
       
      </div>
     

    
    </div>
  );
};

export default ArtistPage;

//     <div className="container mx-auto p-4 lg:relative  ">
//       <div className="lg:w-[1000px] mx-auto">
//         {/* Artist Information Section */}
//         <div className="relative top-10">
//           <img
//             className="w-full h-[355px] lg:h-[426px] opacity-80 rounded-5 "
//             src="https://t3.ftcdn.net/jpg/05/96/09/62/360_F_596096212_DACXTnAgcHxxJmtyTxKe03SMi7LYrOgJ.jpg"
//             alt="Artist Background"
//           />
//           <div className="flex flex-col justify-center items-center relative bottom-14">
//             <img
//               className="w-32 h-32 lg:w-[120px] lg:h-[120px] rounded-full border-4 border-[#F8DE22]"
//               src={artist.img}
//               alt="Artist Avatar"
//             />
//             <h1 className="text-white text-4xl font-semibold font-['SF Pro Display']">
//               {artist.name} {artist.lastName}
//             </h1>
//             <div className="w-full text-center text-white text-opacity-80 text-base font-normal font-['SF Pro Display'] leading-[25px]">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit
//                 {/* Artist edit*/}  
//               <div >
//               <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=>setView('edit')}>edit</button>
              
//               </div>
//               {/* create post */}
//               <div>
//                 <button onClick={()=>setView('create')} type="button" class=" relative bottom-48 left-64 px-5 py-3 text-base font-medium text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
// <svg class="w-4 h-4 text-white me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
// <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
// <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
// </svg>
// create Post
// </button> 

// {view === 'create' && <div><CreatePost user={id} />
// <button onClick={()=>setView('')} type="button" class=" relative bottom-[400px] left-40 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">X</button>


// </div>
// }
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Comments Section */}
//       <div className="lg:flex lg:flex-col lg:items-center lg:mt-[-300px] p-5 ">
// {     !posts.isArray &&  <div className="w-full lg:w-[345px] lg:relative lg:right-[400px] lg:top-40 h-[371px] bg-black bg-opacity-10 rounded-5"></div>
// }        {!posts.isArray &&
//           posts.map((e) => {
//             return (
//               <div className="lg:relative lg:left-40 lg:bottom-10 p-8">
//                 <div className="relative lg:bottom-10 lg:right-52 flex justify-center items-center">
//                   <img
//                     className="w-10 h-10 lg:w-[43px] lg:h-[43px] rounded-full"
//                     src={artist.img}
//                     alt="Commenter Avatar"
//                   />
//                   <div className="text-white text-3xl font-semibold font-['SF Pro Display'] p-2">
//                     {artist.name}
//                   </div>
//                   <div className="text-white text-opacity-50 text-base font-normal font-['SF Pro Display']">
//                     4m
//                   </div>
//                 </div>
//                 <div className="relative bottom-10">

//                 <div class="text-white text-base font-medium font-['SF Pro Display'] relative left-10 lg:relative top-[-3px] lg:left-[300px] bottom-5">
//                {e.title}
//                 </div>
//                 <div class="text-white text-base font-medium font-['SF Pro Display'] relative left-10 lg:relative top-[20px] lg:left-[280px] bottom-5">
//                   {e.description}
//                 </div>
//                 </div>
//                 <img
//                   className="w-full lg:w-[666px] h-[426px] rounded-5 lg:relative lg:left-[00px]"
//                   src={e.img}
//                   alt="Artwork"
//                   />
//               </div>
//             );
//           })}
//         {!posts.isArray && view !== 'edit' && (
            
//           <img src={NoPost} className=" text-xl md:relative md:top-20 md:left-14 relative bottom-0 left-8 lg:relative lg:left-40 lg:top-0 h-[300px]"/>
//         )}
//       </div>
//       {/* <FAQ/> */}
//   {view === 'edit' && 
//   <div>

//   <ArtistEdit artist={artist} id={id}/>
//   <button onClick={()=>setView('')} type="button" class=" relative bottom-[1160px] left-[350px] focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">X</button>

//   </div>
  
//       }
//     </div>